import { Usuario } from './usuario';
import { Datos } from './datos';

var datos: Datos = {
  nAmigos: "6",
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
  cPerfilTodos: true,
  aPerfilTodos: true,
  //contePelis: Prod[];
  //conteSeries: Prod[];
  //conteJuegos: Prod[];
};

export var USUARIO: Usuario = {
  "nombre": "Pepito",
  "apellidos": "Matarile Motos",
  "nacionalidad": "Española",
  "cumpleanos": "22/02",
  "usuario": "castorTresDientes",
  "contraseña": "1234",
  "correo": "pepitogrillo32@gmail.com",
  "datos": datos
};
