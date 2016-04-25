import {Contenido} from './contenido.model';
import {Destacado} from './destacado.model';

var d1: Destacado = {
	destacado: true, imgn: "./img/ds_slide.jpg"
};

var d2: Destacado = {
	destacado: true, imgn: "./img/ro_slide.jpg"
};

var d3: Destacado = {
	destacado: true, imgn: "./img/u_slide.jpg"
};

var d4: Destacado = {
	destacado: false, imgn:""
};

export var CONTENIDO: Contenido[] = [
	{"id": 1,
	"nombreProd": "Uncharted 4",
	"tipo": "Noticia",
	"categoria": "Juegos",
	"titulo": "Uncharted 4: Naughty Dog presenta el Modo Saqueo del multijugador",
	"fecha": "22/04/2016",
	"multimedia": "img/u_cont.jpg",
  "resumen": `"Es un modo de juego al estilo de captura la bandera, pero con un 'giro uncharted':
	puedes lanzar el ‘ídolo’ (también conocido como ‘bandera’)", explica Robert Cogburn, de Naughty Dog.
	"Un gran equipo es clave para ganar la partida, ya que el objetivo es encontrar el ídolo en el mapa
	y llevarlo a tu refugio del tesoro", añade.`,
	"cuerpo":`Poco más de una quincena para el estreno de Uncharted 4: A Thief's End.
	El videojuego ha presentado hoy los primeros detalles así como un vídeo del
	Modo Saqueo correspondiente a su Multijugador, un estilo del competitivo ya
	presente en las dos anteriores entregas de la franquicia.
	Frente a lo visto en Uncharted 2 y Uncharted 3, el estudio ha hecho unos cuantos cambios.
	"En anteriores juegos, la gente que llevaba el ídolo no podía hacer recorridos con él;
	hemos quitado esta restricción", explican en el blog de PlayStation.
	Así mismo, Plunder -nombre del modo en inglés- en el pasado era una experiencia de cinco contra cincho,
	ahora será de cuatro contra cuatro.`,
  "ratio": "",
	"dest": d3
	},

	{
		"id": 2,
		"nombreProd": "Fifa 16",
		"tipo": "Noticia",
	  "categoria": "Juegos",
	  "titulo": "Nueva selección de goles con FIFA 16",
	  "fecha": "15/04/2016",
    "multimedia": "img/f_cont.jpg",
    "resumen": `EA Sports nos presenta un nuevo vídeo de FIFA 16.
    Como cada semana se centra en ofrecernos una selección de los mejores goles realizados en los últimos días.`,
		"cuerpo": `EA Sports nos presenta un nuevo vídeo de FIFA 16.
		Como cada semana se centra en ofrecernos una selección de los mejores goles realizados en los últimos días.
		En la nueva recopilación podemos ver cómo han sido los tantos más espectaculares y
		las jugadas más llamativas que han capturado y enviado a EA Sports los jugadores de este simulador de fútbol en los últimos días. En esta semana, encontramos un gol de Hulk de falta desde más allá del balcón del área, y un tanto de Sergio Agüero impresionante.
		FIFA 16 se puso a la venta en septiembre del año en PC, Xbox One, Xbox 360, PlayStation 4 y PlayStation 3.
		Os recordamos, que pronto llegará de forma gratuita para los suscriptores de EA Access y Origin Access.`,
    "ratio": "",
		"dest": d4
  },

  {
	"id": 3,
	"nombreProd": "Battlefront",
	"tipo": "Noticia",
	"categoria": "Juegos",
	"titulo": "Star Wars: Battlefront nos adelanta el contenido que llegará al juego en primavera",
	"fecha": "13/04/2016",
	"multimedia": "img/btl_cont.jpg",
  "resumen": `EA y DICE han anunciado sus planes de contenido para Star Wars: Battlefront,
  que llegarán a lo largo de la primavera. La desarrolladora ha confirmado que está trabajando en
  la implementación de muchos contenidos nuevos y gratuitos.`,
	"cuerpo": `EA y DICE han anunciado sus planes de contenido para Star Wars: Battlefront,
	que llegarán a lo largo de la primavera. La desarrolladora ha confirmado que está trabajando en la implementación de muchos contenidos nuevos y gratuitos.
	Además, DICE agradece los mensajes de apoyo de la comunidad, y anuncia, que en los próximos meses,
	los jugadores podrán disfrutar de novedades gratuitas como más fines de semana de doble puntuación,
 	misiones de comunidad y eventos especiales -que reportarán más créditos y experiencia-, nuevos contratos del Hutt
 	-que traerán cartas estelares como Berserker,
	la Bomba de bacta y el Neutralizador de iones- y más características.
	Entre ellas, y una de las más esperadas por los usuarios, serán más opciones para disfrutar de Star Wars:
	Battlefront sin conexión. Y marcan una fecha: el 4 de mayo, aprovechando que se celebra el Día de Star Wars,
	DICE preparará nuevas actividades Star Wars: Battlefront que se anunciarán en breve.`,
  "ratio": "",
	"dest": d4
	},

	{
	"id": 4,
	"nombreProd": "Quantum Break",
	"tipo": "Análisis",
	"categoria": "Juegos",
	"titulo": "Análisis de Quantum Break",
	"fecha": "10/04/2016",
	"multimedia": "img/qb_cont.jpg",
  "resumen": `Quantum Break, desarrollado por Remedy Entertainment y distribuido
	por Microsoft para Xbox One y PC, es una nueva aventura de acción de los
	creadores de Alan Wake, en el que su protagonista, Jack Joyce, es capaz de
	manipular el tiempo. Un título con un fuerte componente cinematográfico muy
	enfocado a los tiroteos y las coberturas.`,
	"cuerpo": `Uno de los juegos más esperados del año y uno de los más deseados.
	Quantum Break se convirtió rápidamente en el título a seguir dentro del catálogo
	de exclusivos de Xbox One. Se anunció de manera temprana, tanto que tuvimos que
	sufrir retrasos hasta llegar a este mes de abril de 2016. Detrás del proyecto, Remedy.
	Creadores, entre otros, de Max Payne y de Alan Wake. Una garantía dentro del género
	de la acción en tercera persona. El tiempo que tantas veces se rompe y se detiene en
	el juego ha llegado para Quantum Break. Así es la nueva aventura del estudio finlandés.
	Publicar un título Triple A está siendo una carrera de obstáculos que va más allá de
	los timmings y del día a día de un desarrollo que implica millones de euros de inversión
	y decenas y decenas de trabajadores. Casi como si estuviéramos ante tópicos que
	se reiteran –o el día de la marmota- y de los que Quantum Break no ha escapado.
	El downgrade gráfico desde lo que vimos inicialmente o la polémica sobre la
	resolución en Xbox One han sido dos temas frecuentes en las últimas semanas a
	los que se le debe sumar el anuncio de salida, el mismo día que en la consola
	de Microsoft, del juego para Windows 10. Más allá de todo esto, que rellena
	noticias y enciende foros y redes sociales, lo que queda una vez tenemos
	instalado el título es lo que hay.
	Hace más para la narrativa del título todo lo referente a los documentos extras
	y los nudos que la serie que se ha querido incrustrar. Esta experiencia que mezcla
	videojuego y serie televisiva se anunció a bombo y platillo (no es para menos con
	actores reconocidos presentes en series como The Wire, Juego de Tronos o The Following).
	Por desgracia, la presencia de nombres como Shawn Ashmore, Aiden Gillen, Dominic Monaghan,
	Lance Reddick o Courtney Hope no consigue salvar estos 80 minutos de Live Action entre capítulos.
	La serie narra los acontecimientos dentro de Monarch, la compañía de los “malos de la película”,
	y enlaza ciertos elementos con lo que vemos durante el juego en sí, pero ni
	las interpretaciones ni tampoco la trama que vemos en pantalla nos atrapará.
	Falta camino por recorrer en este sentido, ya que las diferencias de registros
	siguen estando muy presentes y el puzle no acaba de encajar.`,
  "ratio": "7/10",
	"dest": d4
	},

	{
	"id": 5,
	"nombreProd": "Batman vs Superman",
	"tipo": "Análisis",
	"categoria": "Peliculas",
	"titulo": "Análisis: Batman vs Superman",
	"fecha": "22/04/2016",
	"multimedia": "img/bs_cont.jpg",
  "resumen": `Batman v. Superman: Dawn of Justice, o el Amanecer de la Justicia,
	es una película de dos actos. El primero representa fielmente el título de la película.
	El segundo, aunque obligatorio para crear el DC Comics Extended Universe,
	se siente ajeno a la película en cierto sentido.`,
	"cuerpo":`Tras sacar adelante Man of Steel (2013), Zack Snyder se ha echado la
	Justice League a hombros y quiere hacerla algo suyo. No sabemos si habría
	alguien mejor que Snyder al timón de este barco, pero es el capitán que tenemos.
	Hay que aceptarlo. Tampoco se puede entender esta película como un ente independiente.
	Requiere de un pensamiento episódico, es el comienzo de algo más grande.
	La película tiene sus momentos de humor entre tanto escenario de tensión,
	pero muchos menos que, por ejemplo, las dos cintas de The Avengers de Joss Whedon.
	Las comparaciones son inevitables, DC está intentado crear “sus Avengers” pero DC no es Marvel.
	Los personajes de DC siempre tuvieron más fondo, y una película de conjunto le resta parte de este fondo.
	Por suerte, Superman ya lo tuvo, Wonder Woman lo tendrá, y de este nuevo Batman lo veremos por el camino.`,
  "ratio": "6/10",
	"dest": d4},

	{
	"id": 6,
	"nombreProd": "Dark Souls 3",
	"tipo": "Noticia",
	"categoria": "Juegos",
	"titulo": "Se acerca el lanzamiento de Dark Souls 3",
	"fecha": "24/03/2016",
	"multimedia": "img/ds_cont.jpg",
  "resumen": `El lanzamiento de Dark Souls 3 está a menos de un mes y
	Bandai no deja de crear hype. Esta vez nos han dejado un trailer
	con gameplay real y un tema sonoro muy epico.`,
	"cuerpo":"",
  "ratio": "",
	"dest": d1},

	{"id": 7,
	"nombreProd": "Daredevil",
	"tipo": "Análisis",
	"categoria": "Series",
	"titulo": "Daredevil, análisis de la segunda temporada",
	"fecha": "22/03/2016",
	"multimedia": "img/dd_cont.jpg",
  "resumen": `Netflix y Marvel se han tomado de las manos nuevamente para traernos
	otra entrega del héroe que inicio todo para esta genial pareja.
	En su primera temporada Matt Murdock tuvo que enfrentarse al impresionante mafioso
	llamado Wilson Fisk al mismo tiempo que se descubría a sí mismo en este nuevo
	papel de héroe y vigilante que además tiene un trabajo de día,
	y una nueva empresa junto a su mejor amigo.`,
	"cuerpo": `Netflix y Marvel se han tomado de las manos nuevamente para traernos
	otra entrega del héroe que inicio todo para esta genial pareja.
	En su primera temporada Matt Murdock tuvo que enfrentarse al impresionante mafioso llamado
	Wilson Fisk al mismo tiempo que se descubría a sí mismo en este nuevo papel de héroe
	y vigilante que además tiene un trabajo de día, y una nueva empresa junto a su mejor amigo.
	Las cosas han cambiado, ahora con Fisk en la cárcel, Nelson y
	Murdock trata de mantenerse a flote en una ciudad donde intentar salvar a
	todos realmente no paga bien. Daredevil ya es un nombre bien establecido en las calles,
	el demonio de Hell's Kitchen ha servido casi de inspiración para más de un imitador con
	ganas de tomar la justicia en sus propias manos. Sin embargo, sus métodos parecen no funcionar,
	cortas una cabeza al monstruo y otra crece en las sombras.`,
  "ratio": "8/10",
	"dest": d4
	},

	{
	"id": 8,
	"nombreProd": "Rogue One",
	"tipo": "Noticia",
	"categoria": "Peliculas",
	"titulo": "Filtraciones de la sinopsis de Star Wars: Rogue One",
	"fecha": "20/03/2016",
	"multimedia": "img/ro.jpg",
  "resumen": `Desde hace pocas horas existen rumores en internet sobre
	una posible filtración de la sinopsis de Star Wars: Rogue One,
	la primera pélicula de la Antología de Star Wars.`,
	"cuerpo":"",
  "ratio": "",
	"dest": d2}
];
