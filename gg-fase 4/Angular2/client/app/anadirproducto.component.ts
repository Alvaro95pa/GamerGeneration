import {Component,Input,OnInit} from 'angular2/core';
import {infotecnica,requisitosinfor,Prod,comentario} from './clases';
import {Contenido} from './contenido.model';
import {Image} from './image.model';
import {clasesservice} from './clases.service'
import {modoadminservice} from './modoadmin.service';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';

import {MultipartItem} from "./multipart-item";
import {MultipartUploader} from "./multipart-uploader";
import {HTTP_PROVIDERS, Http} from 'angular2/http';

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
        <span class="input-group-addon" id="basic-addon1">Categoría:</span>
        <ul class="col-xs-12 anadircategoria nav nav-pills nav-stacked col-sm-12 contorno">
          <li [class.selecteccheck]="tipoprod==1" (click)="tipoprod = 1"><a >Videojuego</a></li>
          <li [class.selecteccheck]="tipoprod==2" (click)="tipoprod = 2"><a >Serie</a></li>
          <li [class.selecteccheck]="tipoprod==3" (click)="tipoprod = 3"><a >Película</a></li>
        </ul>
      </div>
      <div *ngIf="tipoprod==2 || tipoprod==3">
      <div class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Fecha:</span>
        <input [(ngModel)]="fecha" type="text" class="form-control" placeholder="Inserte una fecha" aria-describedby="basic-addon1">
      </div>
      <div class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Director:</span>
        <input [(ngModel)]="desarrollador" type="text" class="form-control" placeholder="Inserte un el nombre de un director" aria-describedby="basic-addon1">
      </div>
      <div class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Patrocinador:</span>
        <input [(ngModel)]="editor" type="text" class="form-control" placeholder="Inserte un el nombre de un editor" aria-describedby="basic-addon1">
      </div>
      <div class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Genero:</span>
        <input [(ngModel)]="genero" type="text" class="form-control" placeholder="Inserte una genero" aria-describedby="basic-addon1">
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
        <span class="input-group-addon" id="basic-addon1">Trailer:</span>
        <input [(ngModel)]="trailer" type="text" class="form-control" placeholder="Inserte una URL de un video" aria-describedby="basic-addon1">
      </div>
      <div class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Sinopsis:</span>
        <textarea class="mens col-sm-12 col-xs-12" [(ngModel)]="sinopsis"></textarea>
      </div>
      <div class="datos col-sm-12 inforeq">
          <h4>Opciones de Portada</h4>
          <div class="input-group nuevocontenido">
            <span class="input-group-addon" id="basic-addon1">Descripción de la Img:</span>
            <input [(ngModel)]="desc_portada" type="text" class="form-control" placeholder="Descripción" aria-describedby="basic-addon1">
          </div>
          <div class="formulario">
            <form>
          		<label for="exampleInputFile">Buscador de ficheros</label><input type="file" (change)="selectFile($event)">
          		<button type="submit" class="btn btn-danger" (click)="upload()">Subir imagen</button>
            </form>
          </div>
      </div>
    <button (click)="anadirElemProd()" class="btnanadir btn btn-danger col-sm-3 col-xs-12"  >Añadir Contenido</button>

  </div>
  `
})

export class anadirproducto implements OnInit{
  desc_portada:string;
  portada:File;
  auximgP:string;

  tipoopcion:number = 1;
  new_prod:Prod;
  tipoprod:number;
  auxid: number;
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
  new_comentarios: comentario[];
  newimg:Image;

  constructor (private http: Http, private router: Router,private adminservice: modoadminservice,private clasesservice: clasesservice,private _routeParams: RouteParams){}
  //METODOS PARA IMAGENES
  loadImages(){
		return this.http.get("/images").map(
			response => response.json()
    )
	}
  buscarImage(id:number){
    return this.http.get("/image/"+id).map(
			response => response.json()
    )
  }
  selectFile($event) {
      this.portada = $event.target.files[0];
  		console.debug("Selected file: " + this.portada.name + " type:" + this.portada.size + " size:" + this.portada.size);
	}
  upload() {
		console.debug("Uploading file...");

		if (this.portada == null || this.desc_portada == null){
			console.error("You have to select a file and set a description.");
			return;
		}

		let formData = new FormData();

		formData.append("description", this.desc_portada);
		formData.append("file",  this.portada);

		let multipartItem = new MultipartItem(new MultipartUploader({url: '/image/upload'}));

		multipartItem.formData = formData;

		multipartItem.callback = (data, status, headers) => {

			if (status == 200){
				console.debug("File has been uploaded");
				this.loadImages();
			} else {
				console.error("Error uploading file");
			}
		};

		multipartItem.upload();

    this.loadImages().subscribe(id =>{
      this.auxid=id;
      console.log(this.auxid);
    })

 }

  anadirElemProd(){
    this.buscarImage(this.auxid).subscribe(image => {
      this.newimg=image

      this.new_prod = {
        tipoprod:this.tipoprod,
        name:this.name,
        img:this.newimg,
        fecha: this.fecha,
        genero:this.genero,
        plataforma:this.plataforma,
        desarrollador:this.desarrollador,
        editor:this.editor,
        procesador:this.procesador,
        memoria:this.memoria,
        grafica:this.grafica,
        almacenamiento:this.almacenamiento,
        trailer:this.trailer,
        sinopsis:this.sinopsis,
        comentarios: this.new_comentarios
      }

        this.adminservice.pushProd(this.new_prod).subscribe(prod =>{
          console.log(prod);
          this.gotoadmin_productos();
        });
    })
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
