import {Component,Input,OnInit} from 'angular2/core';
import {usuario} from './clases';
import {clasesservice} from './clases.service'
import {modoadminservice} from './modoadmin.service';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';

@Component({
  selector:'listusers',
  template: `

    <div class="row admin">
      <ul class="nav nav-pills nav-stacked col-sm-3 contorno">
        <li  [class.selected]="tipoopcion==1" (click)="gotoadmin_users('Users')"><a >Usuarios</a></li>
        <li  [class.selected]="tipoopcion==2" (click)="gotoadmin_contenido('Noticia')"><a >Noticias</a></li>
        <li  [class.selected]="tipoopcion==3" (click)="gotoadmin_contenido('Análisis')"><a >Analisis</a></li>
        <li  [class.selected]="tipoopcion==4" (click)="gotoadmin_productos()"><a >Productos</a></li>
        <li  (click)="gotoadmin_salir()"><a >Salir</a></li>
      </ul>
      <div>
        <div class="admin_info infor_user col-sm-9 col-xs-12" *ngFor="#user of list_usuarios" (click)="onselect(user)">
          <div class="col-sm-2 col-xs-2">
            <img src={{user.img}}>
          </div>
          <div class="col-sm-6 col-xs-6">
            <h3 class="col-sm-12">{{user.usuario}}</h3>
            <div *ngIf="user === selectedUser">
              <p class="col-sm-12">Nombre: {{user.nombre}}</p>
              <p class="col-sm-12">Cumpleaños: {{user.cumpleanos}}</p>
              <p class="col-sm-12">Correo: {{user.correo}}</p>
            </div>
          </div>
          <button *ngIf="user === selectedUser" class="btn col-sm-4 col-xs-4"  >Editar</button>
          <button (click)="eliminarUser(user)" class="btn col-sm-4 col-xs-4"  >Eliminar</button>
        </div>
      </div>
    </div>
  `,
  styleUrls:  ['style_j.css']
})

export class listusers implements OnInit{
  tipoopcion:number;
  list_usuarios:usuario[];
  selectedUser:usuario;

  onselect(user:usuario){
    this.selectedUser=user;
  }
  eliminarUser(user:usuario){
    this.adminservice.deleteUser(user);
    this.getusuarios();
  }
  constructor (private router: Router,private adminservice: modoadminservice,private clasesservice: clasesservice,private _routeParams: RouteParams){}
  getusuarios(){
    this.adminservice.getusuarios().then(users => this.list_usuarios = users);
  }
  getopcion(){
    let opcion = this._routeParams.get('opcion');
    console.log(opcion);
    this.tipoopcion=1;
  }
  ngOnInit(){
    this.getopcion();
    this.getusuarios();
    console.log(this.tipoopcion);
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
