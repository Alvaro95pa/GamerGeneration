import { Prod } from './clases';
import { Image } from './image.model';
export class Usuario {
  //Identificador
  id: number;
  roles: string[];
  //Informacion personal
  nombre: string;
  apellidos: string;
  nacionalidad: string;
  cumpleanos: string;
  //Datos principales
  usuario: string;
  contrasena: string;
  correo: string;
  imagen: Image;
  //Mas informacion
  //Estadisticas
  nAmigos: number;
  nPelis: number;
  nSeries: number;
  nJuegos: number;
  //Informacion
  ultima: string;
  tUsuario: string;
  //Favoritos
  fPeli: Prod;
  fSerie: Prod;
  fJuego: Prod;
  //Privacidad
  pPerfilTodos: boolean;
  cPerfilTodos: boolean;
  aPerfilTodos: boolean;
  //Contenido
  contenido: Prod[];
  //Amigos
  amigos: Usuario[];
}
