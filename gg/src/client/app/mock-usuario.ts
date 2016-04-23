import { Usuario } from './usuario';
import { Datos } from './datos';

//Usuario 1
var datos1: Datos = {
  nAmigos: "1",
  nPelis: "3",
  nSeries: "3",
  nJuegos: "2",
  aportes: "Ninguno",
  ultima: "Ayer",
  tUsuario: "hace 1 año",
  fPeli: "Deadpool",//Prod
  fSerie: "The walking dead",//Prod
  fJuego: "Civilization V",//Prod
  pPerfilTodos: true,
  cPerfilTodos: false,
  aPerfilTodos: true,
  //contePelis: Prod[];
  //conteSeries: Prod[];
  //conteJuegos: Prod[];
  amigos: [{id: 2, usuario: "velocidadEscarlata"}]
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
  datos: datos1
};
//Usuario 2
var datos2: Datos = {
  nAmigos: "0",
  nPelis: "0",
  nSeries: "0",
  nJuegos: "0",
  aportes: "Ninguno",
  ultima: "Hoy",
  tUsuario: "hace 1 mes",
  fPeli: "Deadpool",//Prod
  fSerie: "The walking dead",//Prod
  fJuego: "Civilization V",//Prod
  pPerfilTodos: true,
  cPerfilTodos: false,
  aPerfilTodos: false,
  //contePelis: Prod[];
  //conteSeries: Prod[];
  //conteJuegos: Prod[];
  amigos: [{id: 1, usuario: "castorTresDientes"}]
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
  datos: datos2
};
//Usuarios
export var USUARIOS: Usuario[] = [usuario1, usuario2];
