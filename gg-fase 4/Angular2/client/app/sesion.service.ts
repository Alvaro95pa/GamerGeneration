import { Injectable, OnInit } from 'angular2/core';
import { Http, RequestOptions, Headers } from 'angular2/http';
import 'rxjs/Rx';
import { Usuario } from './usuario.model';


@Injectable()
export class SesionService {
  //Variables
	isLogged = false;
	isAdmin = false;
	user: Usuario;
	actual: Usuario;
  //Constructor
	constructor(private http: Http){
		this.reqIsLogged();
	}
  //Metodos
  getSesion(){
    return Promise.resolve(this.user);
  }
	setSesion(actual: Usuario){
		this.actual = actual;
	}
	reqIsLogged(){
    let headers = new Headers({
			'X-Requested-With': 'XMLHttpRequest'
		});
    let options = new RequestOptions({headers});
    this.http.get('logIn', options).subscribe(
			response => this.processLogInResponse(response),
			error => {
				if(error.status != 401){
					console.error("Error when asking if logged: "+ JSON.stringify(error));
				}
			}
		);
	}

  getLogged(){
    return this.isLogged;
  }

	private processLogInResponse(response){
		this.isLogged = true;
		this.user = response.json();
		this.isAdmin = this.user.roles.indexOf("ROLE_ADMIN") !== -1;
	}

	logIn(user: string, pass: string) {
    let userPass = user + ":" + pass;
    let headers = new Headers({
			'Authorization': 'Basic '+utf8_to_b64(userPass),
			'X-Requested-With': 'XMLHttpRequest'
		});
    let options = new RequestOptions({headers});
    return this.http.get('logIn', options).map(
			response => {
				this.processLogInResponse(response);
				return this.user;
			}
		);
	}

	logOut(){
    return this.http.get('logOut').map(
			response => {
				this.isLogged = false;
				this.isAdmin = false;
				return response;
			}
		);
	}
}

function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode(<any>'0x' + p1);
    }));
}
