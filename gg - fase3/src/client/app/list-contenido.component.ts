import {Component,Input,OnInit} from 'angular2/core';
import {Contenido} from './contenido.model';
import {ContenidoService} from './contenido.service';
import {modoadminservice} from './modoadmin.service';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';

@Component({
  selector:'listcontenido',
  template: `
    <div class="row admin fondo">
      <div class="col-sm-3 aux">
        <ul class="nav nav-pills nav-stacked col-sm-12 contorno">
          <li  [class.selected]="tipoopcion==1" (click)="gotoadmin_users('Users')"><a >Usuarios</a></li>
          <li  [class.selected]="tipoopcion==2" (click)="gotoadmin_contenido('Noticia')"><a >Noticias</a></li>
          <li  [class.selected]="tipoopcion==3" (click)="gotoadmin_contenido('Análisis')"><a >Analisis</a></li>
          <li  [class.selected]="tipoopcion==4" (click)="gotoadmin_productos()"><a >Productos</a></li>
          <li  (click)="gotoadmin_salir()"><a >Salir</a></li>
        </ul>
        <button (click)="gotoAnadirContenido()" class="btnanadir btn btn-danger col-sm-12 col-xs-12"  >Añadir Contenido</button>
      </div>

      <div class="admin_info admin_contenido col-sm-9 col-xs-12"  *ngFor="#contenido of list_contenido">
        <div class="col-sm-8 col-xs-9">
          <h3 class="col-sm-12">{{contenido.titulo}}</h3>
          <p class="col-sm-5 col-xs-5">Fecha: {{contenido.fecha}}</p>
          <p class="col-sm-7 col-xs-7">Categoria: {{contenido.categoria}}</p>
        </div>
        <button (click)="eliminarContenido(contenido)" class="btn col-sm-4 col-xs-4"  >Eliminar</button>
      </div>
    </div>
  `
})

export class listcontenido implements OnInit{
  tipoopcion:number;
  list_contenido:Contenido[];
  constructor (private router: Router,private adminservice: modoadminservice,private ContenidoService: ContenidoService,private _routeParams: RouteParams){}

  getcontenido(){
    let tipo = this._routeParams.get('tipo');
    this.ContenidoService.getContenidoTipo(tipo).subscribe(list => this.list_contenido=list);
  }
  eliminarContenido(content:Contenido){
    this.adminservice.deleteContenido(content);
    this.getcontenido();
  }
  getopcion(){
    let tipo = this._routeParams.get('tipo');
    if (tipo == "Noticia"){
      this.tipoopcion=2;
    }
    if (tipo == "Análisis"){
      this.tipoopcion=3;
    }
    console.log(tipo);
  }
  ngOnInit(){
    this.getopcion();
    this.getcontenido();
  }
  gotoAnadirContenido(){
    if (this.tipoopcion == 2){
      let link = ['AdminNewContenido',{tipo:"Noticia",nuevo:"NuevaNoticia"}];
      this.router.navigate(link);
    }
    if (this.tipoopcion == 3){
      let link = ['AdminNewContenido',{tipo:"Análisis",nuevo:"NuevoAnalisis"}];
      this.router.navigate(link);
    }

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
