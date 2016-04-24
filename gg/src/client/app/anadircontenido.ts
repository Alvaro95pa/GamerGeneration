import {Component,Input,OnInit} from 'angular2/core';
import {usuario} from './clases';
import {Destacado} from './destacado.model';
import {Contenido} from './contenido.model';
import {clasesservice} from './clases.service'
import {adminservice} from './modoadmin.service';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';

@Component({
  selector:'anadircontenido',
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
        <span class="input-group-addon" id="basic-addon1">Titulo:</span>
        <input [(ngModel)]="titulo" type="text" class="form-control" placeholder="Inserte un titulo" aria-describedby="basic-addon1">
      </div>
      <div class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Categoria:</span>
        <ul class="col-xs-12 anadircategoria nav nav-pills nav-stacked col-sm-12 contorno">
          <li [class.selecteccheck]="categoria=='Videojuegos'" (click)="categoria = 'Videojuegos'"><a >Videojuegos</a></li>
          <li [class.selecteccheck]="categoria=='Series'" (click)="categoria = 'Series'"><a >Series</a></li>
          <li [class.selecteccheck]="categoria=='Peliculas'" (click)="categoria = 'Peliculas'"><a >Peliculas</a></li>
        </ul>
      </div>
      <div class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Fecha:</span>
        <input [(ngModel)]="fecha" type="text" class="form-control" placeholder="Inserte una fecha" aria-describedby="basic-addon1">
      </div>
      <div class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Multimedia:</span>
        <input [(ngModel)]="multimedia" type="text" class="form-control" placeholder="Inserte una URL de un video" aria-describedby="basic-addon1">
      </div>
      <div class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Resumen:</span>
        <textarea class="mens col-sm-12 col-xs-12"   [(ngModel)]="resumen">Escribe</textarea>
      </div>
      <div class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Cuerpo:</span>
        <textarea class="mens col-sm-12 col-xs-12"   [(ngModel)]="cuerpo">Escribe</textarea>
      </div>
      <div *ngIf="tipoopcion == 2" class="datos col-sm-12 inforeq">
          <h4>Opciones de expositor</h4>
          <div class="input-group nuevocontenido">
            <span class="input-group-addon" id="basic-addon1">¿Quiere que aparezca en el expositor?:</span>
            <div [class.checkboxdest]="destacado" (click)="destacado= !destacado" class="col-sm-2 chdestacado">a</div>
          </div>
          <div class="input-group nuevocontenido">
            <span class="input-group-addon" id="basic-addon1">Imagen a mostrar:</span>
            <input [(ngModel)]="imgn" type="text" class="form-control" placeholder="Inserte una imagen" aria-describedby="basic-addon1">
          </div>
      </div>
      <div *ngIf="tipoopcion == 3" class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Puntuacion:</span>
        <input [(ngModel)]="puntuacion" type="text" class="form-control" placeholder="Inserte una puntuación" aria-describedby="basic-addon1">
      </div>
    </div>
    <button (click)="anadirElemContenido()" class="btnanadir btn btn-danger col-sm-3 col-xs-12"  >Añadir Contenido</button>
  </div>
  `,
  styleUrls:  ['style_j.css']
})

export class anadircontenido implements OnInit{
  tipoopcion:number;
  new_contenido:Contenido;
  tipo:string;
  categoria:string;
  titulo:string;
  fecha:string;
  multimedia:string;
  resumen:string;
  cuerpo:string;
  puntuacion:string;
  imgn:string;
  dest:Destacado;
  destacado:boolean =false;


  constructor (private router: Router,private adminservice: adminservice,private clasesservice: clasesservice,private _routeParams: RouteParams){}

  anadirElemContenido(){
    this.dest = {
      destacado:this.destacado,
      imgn:this.imgn
    }
    this.new_contenido = {
      id:5,
      tipo:this.tipo,
      categoria:this.categoria,
      titulo:this.titulo,
      fecha:this.fecha,
      multimedia:this.multimedia,
      resumen:this.resumen,
      cuerpo:this.cuerpo,
      ratio:this.puntuacion,
      dest:this.dest
    }
    this.adminservice.pushContenido(this.new_contenido);
    console.log(this.new_contenido.ratio);
  }
  getopcion(){
    let tipo = this._routeParams.get('tipo');
    if (tipo == "Noticia"){
      this.tipoopcion=2;
      this.tipo=tipo;
    }
    if (tipo == "Análisis"){
      this.tipoopcion=3;
      this.tipo=tipo;
      console.log(tipo);
    }

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
  gotoadmin_salir(){
    let link = ['Princ_Catalogo'];
    this.router.navigate(link);
  }
  gotoadmin_productos(){
    let link = ['AdminProductos'];
    this.router.navigate(link);
  }
}
/*

*/
