import { Injectable } from 'angular2/core';
import { Usuario } from './usuario.model'
import { Prod } from './clases';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from 'angular2/http';
import 'rxjs/Rx';

const BASE_URL = 'http://127.0.0.1:8443/usuarios/';

@Injectable()
export class UsuarioService {
  //Constructor
  constructor(private http: Http) { }
  //Metodos
  //Obtener todos los usuarios
  getUsuarios() {
    return this.http.get(BASE_URL)
    .map(
      response => response.json()
    )
    .catch(
      error => this.handleError(error)
    );
  }
  //Obtener un usuario
  getUsuario(id: number) {
    return this.http.get(BASE_URL + id)
    .map(
      response => response.json()
    )
    .catch(
      error => this.handleError(error)
    );
  }
  //Cambiar la contraseña del usuario
  setContraseña(usuario: Usuario){
    let cambio = JSON.stringify(usuario);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers});
    return this.http.put(BASE_URL + usuario.id, cambio, options)
    .map(
      response => response.json()
    )
    .catch(
      error => this.handleError(error)
    );
  }
  //Cambiar los datos personales del usuario
  setPersonales(usuario: Usuario){
    let cambio = JSON.stringify(usuario);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers});
    return this.http.put(BASE_URL + usuario.id, cambio, options)
    .map(
      response => response.json()
    )
    .catch(
      error => this.handleError(error)
    );
  }
  //Cambiar la privacidad de un usuario
  setPrivacidad(usuario: Usuario){
    let cambio = JSON.stringify(usuario);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers});
    return this.http.put(BASE_URL + usuario.id, cambio, options)
    .map(
      response => response.json()
    )
    .catch(
      error => this.handleError(error)
    );
  }
  //Añadir usuario
  addUsuario(usuario: Usuario){
    let añadido = JSON.stringify(usuario);
    let headers = new Headers({
        'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers});
    return this.http.post(BASE_URL, añadido, options)
    .map(
      response => response.json()
    )
    .catch(
      error => this.handleError(error)
    );
  }
  //Eliminar usuario
  removeUsuario(usuario: Usuario){
    return this.http.delete(BASE_URL + usuario.id)
    .map(
      response => undefined
    )
    .catch(
      error => this.handleError(error)
    );
  }
  //Añadir amigo al usuario
  addAmigo(usuario: Usuario){
    let cambio = JSON.stringify(usuario);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers});
    return this.http.put(BASE_URL + usuario.id, cambio, options)
    .map(
      response => response.json()
    )
    .catch(
      error => this.handleError(error)
    );
  }
  //Borrar amigo del usuario
  remAmigo(usuario: Usuario){
    let cambio = JSON.stringify(usuario);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers});
    return this.http.put(BASE_URL + usuario.id, cambio, options)
    .map(
      response => response.json()
    )
    .catch(
      error => this.handleError(error)
    );
  }
  //Cambiar favorito del usuario
  setFavorito(usuario: Usuario){
    let cambio = JSON.stringify(usuario);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers});
    return this.http.put(BASE_URL + usuario.id, cambio, options)
    .map(
      response => response.json()
    )
    .catch(
      error => this.handleError(error)
    );
  }
  //Borrar favoritos
  removeFav(usuario: Usuario){
    let cambio = JSON.stringify(usuario);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers});
    return this.http.put(BASE_URL + usuario.id, cambio, options)
    .map(
      response => response.json()
    )
    .catch(
      error => this.handleError(error)
    );
  }
  //Añadir contenido al usuario
  addContenido(producto: Prod, usuario: Usuario){
    usuario.datos.contenido.push(producto);
    if(producto.tipoprod == 3){
      usuario.datos.nPelis = usuario.datos.nPelis + 1;
    }
    if(producto.tipoprod == 2){
      usuario.datos.nSeries = usuario.datos.nSeries + 1;
    }
    if(producto.tipoprod == 1){
      usuario.datos.nJuegos = usuario.datos.nJuegos + 1;
    }
    let cambio = JSON.stringify(usuario);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers});
    return this.http.put(BASE_URL + usuario.id, cambio, options)
    .map(
      response => response.json()
    )
    .catch(
      error => this.handleError(error)
    );
  }
  //Eliminar contenido del usuario
  removeContenido(usuario: Usuario){
    let cambio = JSON.stringify(usuario);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers});
    return this.http.put(BASE_URL + usuario.id, cambio, options)
    .map(
      response => response.json()
    )
    .catch(
      error => this.handleError(error)
    );
  }
  //handleError
  private handleError(error: any){
    console.error(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text())
  }
}
