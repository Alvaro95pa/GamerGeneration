package code.daw.library.contenido;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import code.daw.library.comentario.Comentario;
import code.daw.library.expositor.Expositor;
import code.daw.library.imagenes.Image;
import code.daw.library.imagenes.ImagesRepository;
import code.daw.library.productos.Producto;
import code.daw.library.productos.ProductoRepositorio;
import code.daw.library.user.User;
import code.daw.library.user.UserRepository;

@Controller
public class DatabaseInitializer implements CommandLineRunner {

	@Autowired
	private ContenidoRepository contenidoRep;
	
	@Autowired
	private UserRepository usuarioRepositorio;
	
	@Autowired
	private ProductoRepositorio productoRepositorio;
	
	@Autowired
	private ImagesRepository imgRepo;

	@Override
	public void run(String... args) throws Exception {
		
		//Image img1 = new Image("Uncharted", "u_cont.jpg");
		//Image img2 = new Image("Uncharted", "u_slide.jpg");
		
		
		/*
		contenidoRep.save(new Contenido("Uncharted 4", "Noticia", "Juego", 
				"Uncharted 4: Naughty Dog presenta el Modo Saqueo del multijugador", "22/04/2016", 
				img1, "Es un modo de juego al estilo de captura la bandera, pero con un 'giro uncharted': 'puedes lanzar el ‘ídolo’ (también conocido como ‘bandera’)', explica Robert Cogburn, de Naughty Dog. 'Un gran equipo es clave para ganar la partida, ya que el objetivo es encontrar el ídolo en el mapa y llevarlo a tu refugio del tesoro', añade.", 
				"Poco más de una quincena para el estreno de Uncharted 4: A Thief's End."
				+" El videojuego ha presentado hoy los primeros detalles así como un vídeo del"
				+" Modo Saqueo correspondiente a su Multijugador, un estilo del competitivo ya presente en las dos anteriores entregas de la franquicia."
				+" Frente a lo visto en Uncharted 2 y Uncharted 3, el estudio ha hecho unos cuantos cambios."
				+" 'En anteriores juegos, la gente que llevaba el ídolo no podía hacer recorridos con él; hemos quitado esta restricción', explican en el blog de PlayStation."
				+" Así mismo, Plunder -nombre del modo en inglés- en el pasado era una experiencia de cinco contra cinco, ahora será de cuatro contra cuatro.", 
				"", new Expositor(true, img2)));
		
		/*
		Contenido cont2 = new Contenido("Batman vs Superman", "Análisis", "Peliculas", 
				"Análisis: Batman vs Superman", "22/04/2016", 
				new Image("BvS", "img/bs_cont.jpg"), "Batman vs Superman: Dawn of Justice, o el Amanecer de la Justicia, es una película de dos actos. El primero representa fielmente el título de la película. El segundo, aunque obligatorio para crear el DC Comics Extended Universe, se siente ajeno a la película en cierto sentido.",
				"Tras sacar adelante Man of Steel (2013), Zack Snyder se ha echado la Justice League a hombros y quiere hacerla algo suyo. No sabemos si habría alguien mejor que Snyder al timón de este barco, pero es el capitán que tenemos."
				+" Hay que aceptarlo. Tampoco se puede entender esta película como un ente independiente. Requiere de un pensamiento episódico, es el comienzo de algo más grande."
				+" La película tiene sus momentos de humor entre tanto escenario de tensión, pero muchos menos que, por ejemplo, las dos cintas de The Avengers de Joss Whedon."
				+" Las comparaciones son inevitables, DC está intentado crear “sus Avengers” pero DC no es Marvel. Los personajes de DC siempre tuvieron más fondo, y una película de conjunto le resta parte de este fondo."
				+" Por suerte, Superman ya lo tuvo, Wonder Woman lo tendrá, y de este nuevo Batman lo veremos por el camino.", 
				"6/10", new Expositor(false, new Image("BvS", "img/bs_cont.jpg")));
		
		cont2.getComentarios().add(new Comentario(4, 2, "jaime", "img/avatar1.jpg", "20/06/2016", 7, "Awesome"));
		
		contenidoRep.save(cont2);
		
		contenidoRep.save(new Contenido("Dark Souls 3", "Noticia", "Juego", 
				"Se acerca el lanzamiento de Dark Souls 3", "24/03/2016", 
				new Image("DarkSouls3", "img/ds_cont.jpg"), "El lanzamiento de Dark Souls 3 está a menos de un mes y Bandai no deja de crear hype. Esta vez nos han dejado un trailercon gameplay real y un tema sonoro muy epico.", 
				"El lanzamiento de Dark Souls 3 está a menos de un mes y Bandai no deja de crear hype. Esta vez nos han dejado un trailer con gameplay real y un tema sonoro muy epico.", 
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
				//Producto 4
				Producto prod4 = new Producto(3, "Batman vs Superman", "nada", "accion", "pelicula",
						"nada", "nada", "nada", "nada", "nada", "nada", "nada", "nada");
				prod1.setImg(img1);
				prod2.setImg(img1);
				prod3.setImg(img1);
				prod4.setImg(img1);
				productoRepositorio.save(prod1);
				productoRepositorio.save(prod2);
				productoRepositorio.save(prod3);
				productoRepositorio.save(prod4);
			*/
				
				//Usuario 1
				/*
				User usuario1 = new User("jaime", "1234", "pepitogrillo32@gmail.com", "Pepito", "Matarile Motos", 
						"EspaÃ±ola", "22/02", 0, 3, 3, 2, "Ayer", "hace 1 aÃ±o", 
						null, null, null, true, false, false, "ROLE_USER", "ROLE_ADMIN");
				usuario1.setImagen(null);
				//usuario1.addContenido(prod1);
				//usuario1.addContenido(prod2);
				//usuario1.addContenido(prod3);
				usuarioRepositorio.save(usuario1);*/
				
				/*User admin = new User("admin", "admin", "pepitogrillo32@gmail.com", "Pepito", "Matarile Motos", 
						"EspaÃ±ola", "22/02", 0, 3, 3, 2, "Ayer", "desde el inicio de los tiempos", 
						prod1, prod2, prod3, true, false, false, "ROLE_USER", "ROLE_ADMIN");
				
				usuarioRepositorio.save(admin);*/
				
				/*//Usuario 2
				usuarioRepositorio.save(new User("velocidadEscarlata", "5678", "soyLoMas@gmail.com", "IvÃ¡n", 
						"", "EspaÃ±ola", "", 0, 0, 0, 0, "Hoy", 
						"hace 1 dÃ­a", true, false, true, "ROLE_USER"));
				//Usuario ADMIN
				usuarioRepositorio.save(new User("admin", "admin", "", "", 
						"", "", "", 0, 0, 0, 0, "", 
						"", false, false, false, "ROLE_USER", "ROLE_ADMIN"));*/

		
		}
	
}