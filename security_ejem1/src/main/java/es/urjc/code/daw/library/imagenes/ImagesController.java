package es.urjc.code.daw.library.imagenes;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(origins = "*")
public class ImagesController {

	private static final Path FILES_FOLDER = Paths.get(System.getProperty("user.dir"), "files");
	private static final Logger log = LoggerFactory.getLogger(ImagesController.class);
	private List<Image> images = new ArrayList<>();
	
	private int contador =1;
	
	@Autowired
	private ImagesRepository repository;

	@RequestMapping(value = "/image/upload", method = RequestMethod.POST)
	public Image handleFileUpload(@RequestParam String description, @RequestParam MultipartFile file) throws IOException {

		if (file.isEmpty()) {
			throw new RuntimeException("The file is empty");
		}

		if (!Files.exists(FILES_FOLDER)) {
			Files.createDirectories(FILES_FOLDER);
		}
		
		if(this.images.size() == 0){
			this.images = repository.findAll();
		}
		
		String fileName = "image-" + images.size() + ".jpg";
		//String fileName = "image-" + contador + ".jpg";
		File uploadedFile = new File(FILES_FOLDER.toFile(), fileName);
		file.transferTo(uploadedFile);

		Image image = new Image(description, fileName);
		repository.save(image);
		images.add(image);
		contador++;
		return image;
	}

	@RequestMapping("/images")
	public int getImages() {
		return images.size()+1;
	}
	
	/*@RequestMapping("/images")
	public int getImages() {
		return contador;
	}*/

	@RequestMapping(value = {"/image/{id}"}, method = RequestMethod.GET)
	public Image getImagebyid(@PathVariable long id) {
		return repository.findOne(id);
	}
	
	//NOTE: The url format "/images/{fileName:.+}" avoid Spring MVC remove file extension.
	
	@RequestMapping("/images/{fileName:.+}")
	public void handleFileDownload(@PathVariable String fileName, HttpServletResponse res)
			throws FileNotFoundException, IOException {
		
		Path image = FILES_FOLDER.resolve(fileName);

		if (Files.exists(image)) {
			res.setContentType("image/jpeg");
			res.setContentLength((int) image.toFile().length());
			FileCopyUtils.copy(Files.newInputStream(image), res.getOutputStream());
			
		} else {
			res.sendError(404, "File" + fileName + "(" + image.toAbsolutePath() + ") does not exist");
		}
	}
	
	@RequestMapping(value = {"/images/all"}, method = RequestMethod.GET)
	public Collection<Image> getProductosAll() {
		return repository.findAll();
	}

}