import { Component,Input } from 'angular2/core';
import { Usuario } from './usuario.model';
import { UsuarioService } from './usuario.service';
import {Image} from './image.model';
import {Prod} from './clases';
import {MultipartItem} from "./multipart-item";
import {MultipartUploader} from "./multipart-uploader";
import { Router } from 'angular2/router';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

@Component({
  selector: 'registro-component',
  templateUrl: 'app/registro.component.html'
})

export class registrar {
  //Variables
  correo: string;
  usuario: string;
  contrasena: string;
  contrasena2: string;
  nuevo_usuario: Usuario;
  boton: boolean = false;
  error: boolean = false;
  registrado: boolean = false;
  img:Image;
  img_perfil:File;
  descripcion: string;
  auxid:number;
  coleccion: Prod[];
  amigos: Usuario[];

  //Métodos
  constructor (private http: Http, private _usuarioService: UsuarioService, private router: Router){}

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
      this.img_perfil = $event.target.files[0];
  		console.debug("Selected file: " + this.img_perfil.name + " type:" + this.img_perfil.size + " size:" + this.img_perfil.size);
	}

  upload() {
		console.debug("Uploading file...");
    this.descripcion = "perfil";
		if (this.img_perfil == null || this.descripcion == null){
			console.error("You have to select a file and set a description.");
			return;
		}

		let formData = new FormData();

		formData.append("description", this.descripcion);
		formData.append("file",  this.img_perfil);

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

  registrar(){
    this.buscarImage(this.auxid).subscribe(image => {
      this.img=image
      this.nuevo_usuario = {
        nombre: "",
        apellidos: "",
        nacionalidad: "",
        cumpleanos: "",
        roles: ['ROLE_USER'],
        usuario: this.usuario,
        contrasena: this.contrasena,
        correo: this.correo,
        imagen: this.img,
        nAmigos: 0,
        nPelis: 0,
        nSeries: 0,
        nJuegos: 0,
        ultima: "hoy",
        tUsuario: "hoy",
        fPeli: null,
        fSerie: null,
        fJuego: null,
        pPerfilTodos: true,
        cPerfilTodos: true,
        aPerfilTodos: true,
        coleccion: this.coleccion,
        amigos: this.amigos
      }
      this._usuarioService.addUsuario(this.nuevo_usuario).subscribe(usr => this.gotoHome());
      this.registrado = true;
    })
  }

  gotoHome(){
    let link = ['Home'];
    this.router.navigate(link);
  }
}
