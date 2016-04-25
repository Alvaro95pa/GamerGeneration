import { Usuario } from './usuario.model';
import { Datos } from './datos.model';

//Usuario 1
var datos1: Datos = {
  nAmigos: 0,
  nPelis: 3,
  nSeries: 3,
  nJuegos: 2,
  ultima: "Ayer",
  tUsuario: "hace 1 año",
  fPeli: { id: 1, tipoprod: 3, name: "Deadpool", img: "img/deadpool.jpg", genero: null, plataforma: "pelicula"},
  fSerie: { id: 2, tipoprod: 2, name: "The walkind dead", img: "img/twd.jpg", genero: null, plataforma: "serie"},
  fJuego: { id: 3, tipoprod: 1, name: "Civilization V", img: "img/civ5.jpg", genero: null, plataforma:"juego"},
  pPerfilTodos: true,
  cPerfilTodos: false,
  aPerfilTodos: false,
  contenido: [{ id: 1, tipoprod: 3, name: "Deadpool", img: "img/deadpool.jpg", genero: null, plataforma: "pelicula"},
              { id: 2, tipoprod: 3, name: "Creed", img: "img/creed.jpg", genero: null, plataforma: "pelicula"},
              { id: 3, tipoprod: 3, name: "El renacido", img: "img/renacido.jpg", genero: null, plataforma: "pelicula"},
              { id: 4, tipoprod: 2, name: "Arrow", img: "img/arrow.jpg", genero: null, plataforma: "serie"},
              { id: 5, tipoprod: 2, name: "The walkind dead", img: "img/twd.jpg", genero: null, plataforma: "serie"},
              { id: 6, tipoprod: 2, name: "Los 100", img: "img/100.jpg", genero: null, plataforma: "serie"},
              { id: 7, tipoprod: 1, name: "XCOM 2", img: "img/xcom.jpg", genero: null, plataforma: "juego"},
              { id: 8, tipoprod: 1, name: "Civilization V", img: "img/civ5.jpg", genero: null, plataforma: "juego"}],
  amigos: []
};
var usuario1: Usuario = {
  id: 1,
  nombre: "Pepito",
  apellidos: "Matarile Motos",
  nacionalidad: "Española",
  cumpleanos: "22/02",
  usuario: "castorTresDientes",
  contrasena: "1234",
  correo: "pepitogrillo32@gmail.com",
  imagen: "img/avatar1.jpg",
  datos: datos1
};
//Usuario 2
var datos2: Datos = {
  nAmigos: 0,
  nPelis: 0,
  nSeries: 0,
  nJuegos: 0,
  ultima: "Hoy",
  tUsuario: "hace 1 día",
  fPeli: { id: null, tipoprod: null, name: null, img: null, genero: null, plataforma: null},
  fSerie: { id: null, tipoprod: null, name: null, img: null, genero: null, plataforma: null},
  fJuego: { id: null, tipoprod: null, name: null, img: null, genero: null, plataforma: null},
  pPerfilTodos: true,
  cPerfilTodos: false,
  aPerfilTodos: true,
  contenido: null,
  amigos: []
};
var usuario2: Usuario = {
  id: 2,
  nombre: "Iván",
  apellidos: null,
  nacionalidad: "Española",
  cumpleanos: null,
  usuario: "velocidadEscarlata",
  contrasena: "5678",
  correo: "soyLoMas@gmail.com",
  imagen: "img/avatar2.jpg",
  datos: datos2
};
//Usuarios
export var USUARIOS: Usuario[] = [usuario1, usuario2];
