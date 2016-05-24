package code.daw.library.contenido;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;
import code.daw.library.expositor.Expositor;
import code.daw.library.imagenes.Image;

@Controller
public class DatabaseInitializer implements CommandLineRunner {

	@Autowired
	private ContenidoRepository contenidoRep;

	@Override
	public void run(String... args) throws Exception {
		contenidoRep.save(new Contenido("Dark Souls 3", "Noticia", "Juego", 
				"Se acerca el lanzamiento de Dark Souls 3", "24/03/2016", 
				new Image("DarkSouls3", "img/ds_cont.jpg"), "El lanzamiento de Dark Souls 3 está a menos de un mes y Bandai no deja de crear hype.", 
				"El lanzamiento de Dark Souls 3 está a menos de un mes y Bandai no deja de crear hype.", 
				"", new Expositor(true, new Image("DarkSouls3", "img/ds_slide.jpg"))));
	}
}