package code.daw.library.comentario;

import java.util.Collection;

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
@RequestMapping(value={"/comentarios"})
@CrossOrigin(origins = "localhost:8443")
public class ComentarioController {

	@Autowired
	private ComentarioRepositorio repository;

	//Devolver todos los elementos
	@RequestMapping(value = {"/all"}, method = RequestMethod.GET)
	public Collection<Comentario> getProductosAll() {
		return repository.findAll();
	}
	
	//Devolver todos los productos que tengan el idjuego
	@RequestMapping(value = "/idjuego/{idjuego}", method = RequestMethod.GET)
	public ResponseEntity<Collection<Comentario>> getProdbyidjuego(@PathVariable int idjuego) {

		Collection<Comentario> prod = repository.findByidjuego(idjuego);
		if (prod != null) {
			return new ResponseEntity<>(prod, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	//Devolver todos los productos que tengan el idcontenido
		@RequestMapping(value = "/idcontenido/{idcontenido}", method = RequestMethod.GET)
		public ResponseEntity<Collection<Comentario>> getProdbyidcontenido(@PathVariable int idcontenido) {

			Collection<Comentario> prod = repository.findByidcontenido(idcontenido);
			if (prod != null) {
				return new ResponseEntity<>(prod, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		}
	
	//Añade un comentario
	@RequestMapping(value = "/nuevocomentario", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Comentario nuevoProducto(@RequestBody Comentario coment) {

		repository.save(coment);

		return coment;
	}
	
	//Elimina un comentario en base a la id
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Comentario> borraAnuncio(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
