import { Datos } from './datos.model';

export class Usuario {
  //Identificador
  id: number;
  //Informacion personal
  nombre: string;
  apellidos: string;
  nacionalidad: string;
  cumpleanos: string;
  //Datos principales
  usuario: string;
  contrasena: string;
  correo: string;
  imagen: string;
  //Mas informacion
  datos: Datos;
}
