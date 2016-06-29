import {Component,Input,OnInit} from 'angular2/core';
import {comentario} from './clases';
import {Destacado} from './destacado.model';
import {Contenido} from './contenido.model';
import {clasesservice} from './clases.service'
import {modoadminservice} from './modoadmin.service';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';
import {Image} from './image.model';

import {MultipartItem} from "./multipart-item";
import {MultipartUploader} from "./multipart-uploader";
import {HTTP_PROVIDERS, Http} from 'angular2/http';


@Component({
  selector:'anadircontenido',
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
    </div>

    <div class="col-sm-9" >
      <div class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Titulo:</span>
        <input [(ngModel)]="titulo" type="text" class="form-control" placeholder="Inserte un titulo" aria-describedby="basic-addon1">
      </div>
      <div class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Categoria:</span>
        <ul class="col-xs-12 anadircategoria nav nav-pills nav-stacked col-sm-12 contorno">
          <li [class.selecteccheck]="categoria=='Juegos'" (click)="categoria = 'Juegos'"><a >Videojuegos</a></li>
          <li [class.selecteccheck]="categoria=='Series'" (click)="categoria = 'Series'"><a >Series</a></li>
          <li [class.selecteccheck]="categoria=='Peliculas'" (click)="categoria = 'Peliculas'"><a >Peliculas</a></li>
        </ul>
      </div>
      <div class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Fecha:</span>
        <input [(ngModel)]="fecha" type="text" class="form-control" placeholder="Inserte una fecha" aria-describedby="basic-addon1">
      </div>
      <div class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Nombre del producto:</span>
        <input [(ngModel)]="nProd" type="text" class="form-control" placeholder="Inserte un nombre" aria-describedby="basic-addon1">
      </div>
      <div class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Multimedia:</span>
        <input [(ngModel)]="imgn" type="text" class="form-control" placeholder="Inserte una URL de un video" aria-describedby="basic-addon1">
      </div>
      <div class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Resumen:</span>
        <textarea class="mens col-sm-12 col-xs-12"   [(ngModel)]="resumen">Escribe</textarea>
      </div>
      <div class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Cuerpo:</span>
        <textarea class="mens col-sm-12 col-xs-12"   [(ngModel)]="cuerpo">Escribe</textarea>
      </div>
      <div *ngIf="tipoopcion == 3" class="input-group nuevocontenido">
        <span class="input-group-addon" id="basic-addon1">Puntuacion:</span>
        <input [(ngModel)]="puntuacion" type="text" class="form-control" placeholder="Inserte una puntuación" aria-describedby="basic-addon1">
      </div>
      <div  class="datos col-sm-12 inforeq">
          <h4>Opciones de Portada</h4>
          <div class="input-group nuevocontenido">
            <span class="input-group-addon" id="basic-addon1">Descripcion de la Img:</span>
            <input [(ngModel)]="desc_portada" type="text" class="form-control" placeholder="Inserte una imagen" aria-describedby="basic-addon1">
          </div>
          <div class="formulario">
            <form>
          		<label for="exampleInputFile">Buscador de ficheros</label><input type="file" (change)="selectFile($event, 1)">
          		<button type="submit" class="btn btn-danger" (click)="upload(1)">Subir imagen</button>
            </form>
          </div>

      </div>
      <div *ngIf="tipoopcion == 2" class="datos col-sm-12 inforeq">
          <h4>Opciones de expositor</h4>
          <div class="input-group nuevocontenido">
            <span class="input-group-addon" id="basic-addon1">¿Quiere que aparezca en el expositor?:</span>
            <div [class.checkboxdest]="destacado" (click)="destacado= !destacado" class="col-sm-2 chdestacado">a</div>
          </div>
          <div class="input-group nuevocontenido">
            <span class="input-group-addon" id="basic-addon1">Descripcion de la Img:</span>
            <input [(ngModel)]="desc_exp" type="text" class="form-control" placeholder="Inserte una imagen" aria-describedby="basic-addon1">
          </div>
          <div class="formulario">
            <form>
          		<label for="exampleInputFile">Buscador de ficheros</label><input type="file" (change)="selectFile($event, 2)">
          		<button type="submit" class="btn btn-danger" (click)="upload(2)">Subir imagen</button>
            </form>
          </div>
      </div>
    </div>
    <button (click)="anadirElemContenido()" class="btnanadir btn btn-danger col-sm-3 col-xs-12"  >Añadir Contenido</button>
  </div>
  `
})

export class anadircontenido implements OnInit{
  desc_portada:string;
  portada:File;
  desc_exp:string;
  expost:File;
  auximgP:string;
  auximgE:string;
  nProd: string;
  private images: String[] = [];

  tipoopcion:number;
  auxidP: number;
  auxidE: number;
  new_contenido:Contenido;
  tipo:string;
  categoria:string;
  titulo:string;
  fecha:string;
  imagenPortada:Image;
  expositor:Image;
  resumen:string;
  cuerpo:string;
  puntuacion:string;
  imgn:string;
  descripcion: string;
  imgn2:string;
  descripcion2: string;
  dest:Destacado;
  destacado:boolean =false;
  coments: comentario[];


  constructor (private http: Http,   private router: Router,private adminservice: modoadminservice,private clasesservice: clasesservice,private _routeParams: RouteParams){}

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
  selectFile($event,id:number) {
    if (id==1){
      this.portada = $event.target.files[0];
  		console.debug("Selected file: " + this.portada.name + " type:" + this.portada.size + " size:" + this.portada.size);
    }
    if (id==2){
      this.expost = $event.target.files[0];
  		console.debug("Selected file: " + this.expost.name + " type:" + this.expost.size + " size:" + this.expost.size);
    }

	}
  upload(id:number) {
    var archivo:File;
    var desc:string;
    if(id==1){
      archivo=this.portada;
      desc=this.desc_portada
    }
    if (id==2){
      archivo=this.expost;
      desc=this.desc_exp;
    }
		console.debug("Uploading file...");

		if (archivo == null || desc == null){
			console.error("You have to select a file and set a description.");
			return;
		}

		let formData = new FormData();

		formData.append("description", desc);
		formData.append("file",  archivo);

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
    if(id==1){
      this.loadImages().subscribe(id =>{
        this.auxidP=id
        console.log(this.auxidP);

      })
    }
    if (id==2){
      this.loadImages().subscribe(id =>{
        this.auxidE=id
        console.log(this.auximgE);

      })
    }
 }


  anadirElemContenido(){
    if(this.destacado){
      this.buscarImage(this.auxidP).subscribe(image => {
        this.imagenPortada=image
        console.log(this.imagenPortada)
        this.buscarImage(this.auxidE).subscribe(image => {
          this.expositor=image
          console.log(this.imagenPortada)

          this.generarContenido();
        })
      })
    } else {
      this.buscarImage(this.auxidP).subscribe(image => {
        this.imagenPortada=image
        this.expositor=image
        console.log(this.imagenPortada)

        this.generarContenido();
      })
    }

  }

  generarContenido(){
    this.dest = {
      destacado:this.destacado,
      imgn: this.expositor
    }

    this.new_contenido = {
      nProducto:this.nProd,
      tipo:this.tipo,
      categoria:this.categoria,
      titulo:this.titulo,
      fecha:this.fecha,
      multimedia:this.imagenPortada,
      resumen:this.resumen,
      cuerpo:this.cuerpo,
      ratio:this.puntuacion,
      dest:this.dest,
      comentarios: this.coments
    }
    this.adminservice.pushContenido(this.new_contenido).subscribe(cont =>{
      console.log(cont);
      this.gotoadmin_contenido(this.tipo);
    });
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
