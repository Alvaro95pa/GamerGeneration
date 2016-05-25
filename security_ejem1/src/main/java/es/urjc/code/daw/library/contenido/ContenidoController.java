package es.urjc.code.daw.library.contenido;

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
@RequestMapping("/contenido")
@CrossOrigin(origins = "https://localhost:8443")
public class ContenidoController {
	
	private static final Logger log = LoggerFactory.getLogger(ContenidoController.class);
	
	@Autowired
	private ContenidoRepository repository;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Contenido> getContenidos() {
		return repository.findAll();
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Contenido> getContenido(@PathVariable long id) {

		log.info("Obteniendo contenido {}", id);

		Contenido contenido = repository.findOne(id);
		if (contenido != null) {
			return new ResponseEntity<>(contenido, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Contenido nuevoContenido(@RequestBody Contenido contenido) {

		repository.save(contenido);

		return contenido;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Contenido> borraContenido(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}