import {Component,Input,OnInit} from 'angular2/core';
import {usuario,infotecnica,requisitosinfor,Prod,infodetalle} from './clases';
import {Contenido} from './contenido.model';
import {clasesservice} from './clases.service'
import {modoadminservice} from './modoadmin.service';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';

@Component({
  selector:'anadirproducto',
  template: `
  <div class="row admin">
    <div class="col-sm-3 aux">
      <ul class="nav nav-pills nav-stacked col-sm-12 contorno">
        <li  [class.selected]="tipoopcion==1" (click)="gotoadmin_users('Users')"><a >Usuarios</a></li>
        <li  [class.selected]="tipoopcion==2" (click)="gotoadmin_contenido('Noticia')"><a >Noticias</a></li>
        <li  [class.selected]="tipoopcion==3" (click)="gotoadmin_contenido('Análisis')"><a >Analisis</a></li>
        <li  [class.selected]="tipoopcion==4" (click)="gotoadmin_productos()"><a >Productos</a></li>
        <li  (click)="gotoadmin_salir()"><a >Salir</a></li>
      </ul>
    </div>

    <div class="col-sm-9" >
      <div class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Nombre:</span>
        <input [(ngModel)]="name" type="text" class="form-control" placeholder="Inserte un nombre" aria-describedby="basic-addon1">
      </div>
      <div class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Categoria:</span>
        <ul class="col-xs-12 anadircategoria nav nav-pills nav-stacked col-sm-12 contorno">
          <li [class.selecteccheck]="tipoprod==1" (click)="tipoprod = 1"><a >Videojuego</a></li>
          <li [class.selecteccheck]="tipoprod==2" (click)="tipoprod = 2"><a >Serie</a></li>
          <li [class.selecteccheck]="tipoprod==3" (click)="tipoprod = 3"><a >Pelicula</a></li>
        </ul>
      </div>
      <div class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Imagen Portada:</span>
        <input [(ngModel)]="img" type="text" class="form-control" placeholder="Inserte una fecha" aria-describedby="basic-addon1">
      </div>
      <div class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Trailer:</span>
        <input [(ngModel)]="trailer" type="text" class="form-control" placeholder="Inserte una URL de un video" aria-describedby="basic-addon1">
      </div>
      <div *ngIf="tipoprod==2 || tipoprod==3">
      <div class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Director:</span>
        <input [(ngModel)]="desarrollador" type="text" class="form-control" placeholder="Inserte un el nombre de un director" aria-describedby="basic-addon1">
      </div>
      <div class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Patrocinador:</span>
        <input [(ngModel)]="editor" type="text" class="form-control" placeholder="Inserte un el nombre de un editor" aria-describedby="basic-addon1">
      </div>
      </div>
      <div *ngIf="tipoprod==1" class="datos col-sm-6 infotecn">
          <h4>Información técnica</h4>
          <div class="input-group nuevocontenido">
            <span class="input-group-addon" id="basic-addon1">Fecha:</span>
            <input [(ngModel)]="fecha" type="text" class="form-control" placeholder="Inserte una fecha" aria-describedby="basic-addon1">
          </div>
          <div class="input-group nuevocontenido">
            <span class="input-group-addon" id="basic-addon1">Genero:</span>
            <input [(ngModel)]="genero" type="text" class="form-control" placeholder="Inserte una genero" aria-describedby="basic-addon1">
          </div>
          <div class="input-group nuevocontenido">
            <span class="input-group-addon" id="basic-addon1">Plataformas:</span>
            <input [(ngModel)]="plataforma" type="text" class="form-control" placeholder="Inserte una plataforma" aria-describedby="basic-addon1">
          </div>
          <div class="input-group nuevocontenido">
            <span class="input-group-addon" id="basic-addon1">Desarrollador:</span>
            <input [(ngModel)]="desarrollador" type="text" class="form-control" placeholder="Inserte una desarrolladora" aria-describedby="basic-addon1">
          </div>
          <div class="input-group nuevocontenido">
            <span class="input-group-addon" id="basic-addon1">Editor:</span>
            <input [(ngModel)]="editor" type="text" class="form-control" placeholder="Inserte un editor" aria-describedby="basic-addon1">
          </div>
      </div>
      <div *ngIf="tipoprod==1" class="datos col-sm-6 inforeq">
          <h4>Requisitos del sistema</h4>
          <div class="input-group nuevocontenido">
            <span class="input-group-addon" id="basic-addon1">Procesador:</span>
            <input [(ngModel)]="procesador" type="text" class="form-control" placeholder="Inserte una procesador" aria-describedby="basic-addon1">
          </div>
          <div class="input-group nuevocontenido">
            <span class="input-group-addon" id="basic-addon1">Memoria:</span>
            <input [(ngModel)]="memoria" type="text" class="form-control" placeholder="Inserte una cantidad de memoria" aria-describedby="basic-addon1">
          </div>
          <div class="input-group nuevocontenido">
            <span class="input-group-addon" id="basic-addon1">Graficos:</span>
            <input [(ngModel)]="grafica" type="text" class="form-control" placeholder="Inserte una tarjeta grafica" aria-describedby="basic-addon1">
          </div>
          <div class="input-group nuevocontenido">
            <span class="input-group-addon" id="basic-addon1">Almacenamiento:</span>
            <input [(ngModel)]="almacenamiento" type="text" class="form-control" placeholder="Inserte una cantidad en GBs" aria-describedby="basic-addon1">
          </div>

      </div>
      <div class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Sinopsis:</span>
        <textarea class="mens col-sm-12 col-xs-12"   [(ngModel)]="sinopsis"></textarea>
      </div>




    <button (click)="anadirElemProd()" class="btnanadir btn btn-danger col-sm-3 col-xs-12"  >Añadir Contenido</button>

  </div>
  `
})

export class anadirproducto implements OnInit{
  tipoopcion:number = 1;
  new_prod:Prod;
  new_infodetalle:infodetalle;
  tipoprod:number;
  name:string;
  img:string;
  trailer:string;
  fecha:string;
  genero:string;
  plataforma:string;
  desarrollador:string;
  editor:string;
  procesador:string;
  memoria:string;
  grafica:string;
  almacenamiento:string;
  infotecnic: infotecnica;
  inforequisitos: requisitosinfor;
  sinopsis:string;
  /*tipo:string;
  categoria:string;
  titulo:string;
  fecha:string;
  multimedia:string;
  resumen:string;
  cuerpo:string;
  puntuacion:string;*/

  constructor (private router: Router,private adminservice: modoadminservice,private clasesservice: clasesservice,private _routeParams: RouteParams){}

  anadirElemProd(){
    this.infotecnic = {
      fecha: this.fecha,
      genero: this.genero,
      plataforma: this.plataforma,
      desarrollador: this.desarrollador,
      editor: this.editor
    };
    this.inforequisitos = {
      procesador:this.procesador,
      memoria:this.memoria,
      graficos:this.grafica,
      almacenamiento: this.almacenamiento
    };
    this.new_infodetalle = {
      id:8,
      tipoprod: this.tipoprod,
      name:this.name,
      img:this.img,
      trailer:this.trailer,
      infotecnic:this.infotecnic,
      inforequisitos:this.inforequisitos,
      sinopsis:this.sinopsis
    }
    this.new_prod = {
      id:20,
      tipoprod:this.tipoprod,
      name:this.name,
      img:this.img,
      genero:this.genero,
      plataforma:this.plataforma
    }
    this.adminservice.pushProd(this.new_prod, this.new_infodetalle);
    this.gotoadmin_productos();
  }
  getopcion(){
    this.tipoopcion=4;
  }
  ngOnInit(){
    this.getopcion();
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
