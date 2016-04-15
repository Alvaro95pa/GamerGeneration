import { USUARIO } from './mock-usuario';
import { Injectable } from 'angular2/core';

@Injectable()
export class UsuarioService {
  getUsuario() {
    return Promise.resolve(USUARIO);
  }
}
