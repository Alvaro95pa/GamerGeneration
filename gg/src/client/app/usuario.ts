import { Datos } from './datos';

export class Usuario {
  //Informacion personal
  nombre: string;
  apellidos: string;
  nacionalidad: string;
  cumpleaños: string;
  //Datos principales
  usuario: string;
  contraseña: string;
  correo: string;
  //Mas informacion
  datos: Datos;
}
