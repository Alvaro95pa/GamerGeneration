package es.urjc.code.daw.library;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.urjc.code.daw.library.imagenes.Image;
import es.urjc.code.daw.library.productos.Producto;
import es.urjc.code.daw.library.productos.ProductoRepositorio;
import es.urjc.code.daw.library.user.User;
import es.urjc.code.daw.library.user.UserRepository;

@Controller
public class DatabaseInitializer implements CommandLineRunner {

	@Autowired
	private UserRepository usuarioRepositorio;
	
	
	@Autowired
	private ProductoRepositorio productoRepositorio;
	
	@Override
	public void run(String... args) throws Exception {
		//PRODUCTOS
		//Producto 1
		Producto prod1 = new Producto(3, "Deadpool", new Image("", ""), null, "accion", "pelicula",
				null, null, null, null, null, null, null, null);
		//Producto 2
		Producto prod2 = new Producto(2, "The walkind dead", new Image("", ""), null, "accion", "serie",
				null, null, null, null, null, null, null, null);
		//Producto 3
		Producto prod3 = new Producto(1, "Civilization V", new Image("", ""), null, "estrategia", "juego",
				null, null, null, null, null, null, null, null);
		productoRepositorio.save(prod1);
		productoRepositorio.save(prod2);
		productoRepositorio.save(prod3);
		//USUARIOS
		//Usuario 1
		User usuario1 = new User("castorTresDientes", "1234", "pepitogrillo32@gmail.com", "Pepito", "Matarile Motos", 
				"Española", "22/02", new Image("", ""), 0, 3, 3, 2, "Ayer", "hace 1 año", 
				prod1, prod2, prod3, true, false, false, "ROLE_USER");
		usuario1.addContenido(prod1);
		usuario1.addContenido(prod2);
		usuario1.addContenido(prod3);
		usuarioRepositorio.save(usuario1);
		
		/*//Usuario 2
		usuarioRepositorio.save(new User("velocidadEscarlata", "5678", "soyLoMas@gmail.com", "Iván", 
				"", "Española", "", 0, 0, 0, 0, "Hoy", 
				"hace 1 día", true, false, true, "ROLE_USER"));
		//Usuario ADMIN
		usuarioRepositorio.save(new User("admin", "admin", "", "", 
				"", "", "", 0, 0, 0, 0, "", 
				"", false, false, false, "ROLE_USER", "ROLE_ADMIN"));*/
	}
}