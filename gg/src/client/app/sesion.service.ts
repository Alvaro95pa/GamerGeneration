import {Sesion} from './sesion.model';
import { SESION } from './mock-sesion';
import { Injectable } from 'angular2/core';

@Injectable()
export class SesionService {

  getSesion() {
    return Promise.resolve(SESION);
  }

  setSesion(sesion: Sesion) {
    SESION.id = sesion.id;
    SESION.usuario = sesion.usuario;
    SESION.contrasena = sesion.contrasena;
    SESION.user = sesion.user;
    SESION.pass = sesion.pass;
    SESION.loged = sesion.loged;
  }

}
