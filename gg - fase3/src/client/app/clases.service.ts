import {Injectable} from 'angular2/core';

import {Prod,comentario,usuario} from './clases';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

const BASE_URL = 'https://localhost:8443/productos';
const BASE_URL2 = 'https://localhost:8443/comentarios';

@Injectable()
export class clasesservice {
  constructor(private http: Http) {}

  getProductos (){
    return this.http.get(BASE_URL + '/all')
      .map(resp => resp.json())
      .catch(err => this.mostrarError(err));
  }

  getProdNombre (name:String){
    return this.http.get(BASE_URL + '/' + name)
      .map(resp => resp.json())
      .catch(err => this.mostrarError(err));
  }

  getProductosFiltro(juego:number,series:number,pelis:number){
    return this.http.get(BASE_URL + '/filtro/' + "/" + juego  + "/" + series  + "/" + pelis)
      .map(resp => resp.json())
      .catch(err => this.mostrarError(err));
  }

  getProductosTipo(tipo: number){
    return this.http.get(BASE_URL + '/tipoprod/' + tipo)
      .map(resp => resp.json())
      .catch(err => this.mostrarError(err));
  }
  getProd (id:number){
    return this.http.get(BASE_URL + '/id/' + id)
      .map(resp => resp.json())
      .catch(err => this.mostrarError(err));
  }

  getProdPlataforma(tipoprod:number, plat: String){
    return this.http.get(BASE_URL + '/plataforma/'+ tipoprod + '/' + plat)
      .map(resp => resp.json())
      .catch(err => this.mostrarError(err));
  }
  getProdGenero(tipoprod:number, gen: String){
    return this.http.get(BASE_URL + '/genero/' + tipoprod + '/' + gen)
      .map(resp => resp.json())
      .catch(err => this.mostrarError(err));
  }

  getcomentarios(idjuego:number){
    return this.http.get(BASE_URL + '/idjuego/' + idjuego)
      .map(resp => resp.json())
      .catch(err => this.mostrarError(err));  }

  getcomentariosContenido(idcontenido:number){
    return this.http.get(BASE_URL2 + '/idcontenido/' + idcontenido)
      .map(resp => resp.json())
      .catch(err => this.mostrarError(err));
  }
  pushRespuesta(comentario:comentario){
    let body = JSON.stringify(comentario);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });
    return this.http.post(BASE_URL2 + '/nuevocomentario',body,options)
      .map(resp => resp.json())
      .catch(err => this.mostrarError(err));
  }

  actualizarProducto(producto: Prod){
    let añadido = JSON.stringify(producto);
    let headers = new Headers({
        'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers});
    return this.http.put(BASE_URL+"/"+producto.id, añadido, options)
    .map(response => response.json())
    .catch(error => this.mostrarError(error));
  }

  /*getusuarios(){
    return Promise.resolve (usuarios_list);
  }
  deleteUser(user:usuario){
    let position = usuarios_list.indexOf(user);
    usuarios_list.splice(position,1);
    console.log(position);
  }*/

  private mostrarError(error: any){
    console.error(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text())
  }
}
