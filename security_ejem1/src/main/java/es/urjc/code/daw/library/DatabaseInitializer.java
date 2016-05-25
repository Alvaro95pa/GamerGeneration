package es.urjc.code.daw.library;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.urjc.code.daw.library.contenido.Contenido;
import es.urjc.code.daw.library.contenido.ContenidoRepository;
import es.urjc.code.daw.library.expositor.Expositor;
import es.urjc.code.daw.library.imagenes.Image;
import es.urjc.code.daw.library.productos.Producto;
import es.urjc.code.daw.library.productos.ProductoRepositorio;
import es.urjc.code.daw.library.user.User;
import es.urjc.code.daw.library.user.UserRepository;

@Controller
public class DatabaseInitializer implements CommandLineRunner {

	@Autowired
	private ContenidoRepository contenidoRep;
	
	@Autowired
	private UserRepository usuarioRepositorio;
	
	@Autowired
	private ProductoRepositorio productoRepositorio;
	
	@Override
	public void run(String... args) throws Exception {
		//CONTENIDO
		contenidoRep.save(new Contenido("Uncharted 4", "Noticia", "Juego", 
				"Uncharted 4: Naughty Dog presenta el Modo Saqueo del multijugador", "22/04/2016", 
				new Image("Uncharted", "img/u_cont.jpg"), "Es un modo de juego al estilo de captura la bandera, pero con un 'giro uncharted'.", 
				"Poco más de una quincena para el estreno de Uncharted 4: A Thief's End.", 
				"", new Expositor(true, new Image("Uncharted", "./img/u_slide.jpg"))));
		
		contenidoRep.save(new Contenido("Batman vs Superman", "Análisis", "Peliculas", 
				"Análisis: Batman vs Superman", "22/04/2016", 
				new Image("BvS", "img/bs_cont.jpg"), "Batman v. Superman: Dawn of Justice, o el Amanecer de la Justicia, es una película de dos actos.",
				"Tras sacar adelante Man of Steel (2013), Zack Snyder se ha echado la Justice League a hombros y quiere hacerla algo suyo.", 
				"6/10", new Expositor(false, new Image("BvS", "img/bs_cont.jpg"))));
		
		contenidoRep.save(new Contenido("Dark Souls 3", "Noticia", "Juego", 
				"Se acerca el lanzamiento de Dark Souls 3", "24/03/2016", 
				new Image("DarkSouls3", "img/ds_cont.jpg"), "El lanzamiento de Dark Souls 3 está a menos de un mes y Bandai no deja de crear hype.", 
				"El lanzamiento de Dark Souls 3 está a menos de un mes y Bandai no deja de crear hype.", 
				"", new Expositor(true, new Image("DarkSouls3", "img/ds_slide.jpg"))));
		//PRODUCTOS
		//Producto 1
		Producto prod1 = new Producto(3, "Deadpool", "nada", "accion", "pelicula",
				"nada", "nada", "nada", "nada", "nada", "nada", "nada", "nada");
		//Producto 2
		Producto prod2 = new Producto(2, "The walkind dead", "nada", "accion", "serie",
				"nada", "nada", "nada", "nada", "nada", "nada", "nada", "nada");
		//Producto 3
		Producto prod3 = new Producto(1, "Civilization V", "nada", "estrategia", "juego",
				"nada", "nada", "nada", "nada", "nada", "nada", "nada", "nada");
		prod1.setImg(new Image("nada","nada"));
		prod2.setImg(new Image("nada","nada"));
		prod3.setImg(new Image("nada","nada"));
		productoRepositorio.save(prod1);
		productoRepositorio.save(prod2);
		productoRepositorio.save(prod3);
		//USUARIOS
		//Usuario 1
		User usuario1 = new User("castorTresDientes", "1234", "pepitogrillo32@gmail.com", "Pepito", "Matarile Motos", 
				"Española", "22/02", 0, 3, 3, 2, "Ayer", "hace 1 año", 
				prod1, prod2, prod3, true, false, false, "ROLE_USER");
		usuario1.setImagen(new Image("",""));
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