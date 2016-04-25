import {Component,Input,OnInit} from 'angular2/core';
import {usuario} from './clases';
import {Sesion} from './sesion.model';
import {clasesservice} from './clases.service'
import {modoadminservice} from './modoadmin.service';
import {AdminService} from './admin.service';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';

@Component({
  selector:'loginadmin',
  template: `

    <div class="row admin fondo">
      <div class="panel panel-default">
          <div class="panel-body registro">
              <center>
                  <h2>Inicia Sesion</h2>
                  <div class="input-group nuevocontenido">
                    <span class="input-group-addon" id="basic-addon1">Usuario:</span>
                    <input [(ngModel)]="user" type="text" class="form-control" placeholder="Inserte un usuario" aria-describedby="basic-addon1">
                  </div>
                  <div class="col-sm-12 input-group nuevocontenido">
                    <span class="input-group-addon" id="basic-addon1">Contraseña:</span>
                    <input [(ngModel)]="pass" type="text" class="form-control" placeholder="Inserte una contraseña" aria-describedby="basic-addon1">
                  </div>
                  <p *ngIf="error">Datos introducidos incorrectos</p>
                  <button (click)="loginadmin()" class="btn btn-info">Conectarse</button>

              </center>
          </div>
      </div>
    </div>
  `
})

export class loginadmin implements OnInit{
  user:string;
  pass:string;
  error:boolean =false;
  admin:Sesion;
  loginadmin(){
    if (this.user == this.admin.usuario && this.pass == this.admin.contrasena){
      this.error=false;
      this.gotoadmin_users();
    } else {
      this.error = true;
    }
  }
  constructor (private router: Router, private AdminService:AdminService){}
  getadmin(){
    this.admin = this.AdminService.getAdmin();
  }
  ngOnInit(){
    this.getadmin();
  }
  gotoadmin_users(){
    let link = ['AdminUsers'];
    this.router.navigate(link);
  }
  gotoadmin_contenido(opc:string){
    let link = ['AdminContenido',{tipo:opc}];
    this.router.navigate(link);
  }
  gotoadmin_productos(){
    let link = ['AdminProductos'];
    this.router.navigate(link);
  }
  gotoadmin_salir(){
    let link = ['Princ_Catalogo'];
    this.router.navigate(link);
  }
}
/*

*/
