package es.urjc.code.daw.library.expositor;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/expositor")
@CrossOrigin(origins = "https://localhost:8443")
public class ExpositorController {
	
	private static final Logger log = LoggerFactory.getLogger(ExpositorController.class);
	
	@Autowired
	private ExpositorRepository repository;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Expositor> getExpositores() {
		return repository.findAll();
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Expositor> getExpuesto(@PathVariable long id) {

		log.info("Obteniendo expuesto {}", id);

		Expositor expo = repository.findOne(id);
		if (expo != null) {
			return new ResponseEntity<>(expo, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Expositor nuevoExpuesto(@RequestBody Expositor expo) {

		repository.save(expo);

		return expo;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Expositor> borrarExpuesto(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
}