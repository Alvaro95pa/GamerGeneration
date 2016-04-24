import 'angular2/core';

export interface Sesion {
	id: number;
	imagen: string;
	usuario: string;
  contrasena: string;
	user: boolean;
	pass: boolean;
	loged: boolean;
}
