import {Contenido} from './contenido.model';
import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from 'angular2/http';
import 'rxjs/Rx';

const BASE_URL = 'http://127.0.0.1:8080/contenido/';

@Injectable()
export class ContenidoService {

  constructor(private http: Http){}

  getContenido() {
    return this.http.get(BASE_URL)
    .map(response => response.json())
    .catch(error => this.handleError(error));
  }

  getContenidoId(id: number) {
    return this.http.get(BASE_URL + id)
   .map(response => response.json())
   .catch(error => this.handleError(error));
  }

  getContenidoTipo(tipo:string){
    return this.http.get(BASE_URL + tipo)
   .map(response => response.json())
   .catch(error => this.handleError(error));
  }

  getContenidoSlides(expuesto:boolean){
    return this.http.get(BASE_URL + expuesto)
    .map(response => response.json())
    .catch(error => this.handleError(error));
  }
  
  //Subida de contenido
  addContenido(contenido: Contenido){
    let añadido = JSON.stringify(contenido);
    let headers = new Headers({
        'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers});
    return this.http.post(BASE_URL, añadido, options)
    .map(response => response.json())
    .catch(error => this.handleError(error));
  }

  //Borrado de contenido
  removeUsuario(contenido: Contenido){
    return this.http.delete(BASE_URL + contenido.id)
    .map(response => undefined)
    .catch(error => this.handleError(error));
  }

  //handleError
  private handleError(error: any){
    console.error(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text());
  }
}
