package code.daw.library.productos;

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
@RequestMapping("/productos")
@CrossOrigin(origins = "http://localhost:8443")
public class ProductoController {

	//private static final Logger log = LoggerFactory.getLogger(ProductoController.class);

	@Autowired
	private ProductoRepositorio repository;

	//Devolver todos los elementos
	@RequestMapping(value = {"/all"}, method = RequestMethod.GET)
	public Collection<Producto> getProductosAll() {
		return repository.findAll();
	}
	//Devolver un producto por su nombre
		@RequestMapping(value = {"/{nombre}"}, method = RequestMethod.GET)
		public Collection<Producto> getProductobyname(@PathVariable String nombre) {
			return repository.findByname(nombre);
		}
	//Devolver todos los productos que tengan un tipoprod
	@RequestMapping(value = "/tipoprod/{tipoprod}", method = RequestMethod.GET)
	public ResponseEntity<Collection<Producto>> getProdbyTipoprod(@PathVariable int tipoprod) {

		Collection<Producto> prod = repository.findBytipoprod(tipoprod);
		if (prod != null) {
			return new ResponseEntity<>(prod, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	//Devolver todos los productos que tengan el genero en base al tipoprod
	@RequestMapping(value = "/genero/{tipoprod}/{genero}", method = RequestMethod.GET)
	public ResponseEntity<Collection<Producto>> getProdbyGenero(@PathVariable String genero,@PathVariable int tipoprod) {

		Collection<Producto> prod = repository.findBytipoprodAndGenero(tipoprod, genero);
		if (prod != null) {
			return new ResponseEntity<>(prod, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	//Devolver todos los productos que tengan la plataforma en base al tipoprod
	@RequestMapping(value = "/plataforma/{tipoprod}/{plataforma}", method = RequestMethod.GET)
	public ResponseEntity<Collection<Producto>> getProdbyPlataforma(@PathVariable String plataforma,@PathVariable int tipoprod) {

		Collection<Producto> prod = repository.findBytipoprodAndPlataforma(tipoprod, plataforma);
		if (prod != null) {
			return new ResponseEntity<>(prod, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	//Devolver productos en base a los tiposprod dados
	@RequestMapping(value = "/filtro/{id1}/{id2}/{id3}", method = RequestMethod.GET)
	public ResponseEntity<Collection<Producto>> getProdbyPlataforma(@PathVariable int id1,@PathVariable int id2,@PathVariable int id3) {

		Collection<Producto> prod = repository.findBytipoprod(id1);
		prod.addAll(repository.findBytipoprod(id2));
		prod.addAll(repository.findBytipoprod(id3));

		return new ResponseEntity<>(prod, HttpStatus.OK);
	}
	
	//Devolver un producto por id
	@RequestMapping(value = "/id/{id}", method = RequestMethod.GET)
	public ResponseEntity<Producto> getProdbyId(@PathVariable long id) {

		//log.info("Get book {}", id);

		Producto prod = repository.findOne(id);
		if (prod != null) {
			return new ResponseEntity<>(prod, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	//Añade un producto
	@RequestMapping(value = "/nuevoproducto", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Producto nuevoProducto(@RequestBody Producto prod) {

		repository.save(prod);

		return prod;
	}
	
	//Actualiza un producto en base a un producto nuevo y una id
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Producto> actualizarProd(@PathVariable long id, @RequestBody Producto upProd) {

		Producto prod = repository.findOne(id);
		if (prod != null) {

			upProd.setId(id);
			repository.save(upProd);

			return new ResponseEntity<>(upProd, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	//Elimina un producto en base a la id
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Producto> borraAnuncio(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
