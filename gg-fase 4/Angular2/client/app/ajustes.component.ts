import { Component } from 'angular2/core';
import { MenuComponent } from './menu.component';
import { SeleccionComponent } from './seleccion.component';
import { UsuarioService } from './usuario.service';
import { OnInit } from 'angular2/core';
import { Usuario } from './usuario.model';
import { RouteParams } from 'angular2/router';
import { SesionService } from './sesion.service';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {MultipartItem} from "./multipart-item";
import {MultipartUploader} from "./multipart-uploader";

@Component({
  selector: 'ajustes-component',
  templateUrl: 'app/ajustes.component.html',
  directives: [MenuComponent, SeleccionComponent],
  providers: [UsuarioService, SesionService]
})

export class AjustesComponent  implements OnInit {
  //Variables
  usuario: Usuario;
  actual: string;
  visible: boolean = false;
  datos: boolean = false;
  descripcion:string;
  img_perfil:File;
  auxid:number;

  //Metodos
  constructor(private http: Http, private _usuarioService: UsuarioService, private _routeParams: RouteParams, private _sesionService: SesionService) {}
  ngOnInit() {
    let id= +this._routeParams.get('id');
    this._usuarioService.getUsuario(id).subscribe(usuario =>{
      this.usuario = usuario;
      this._sesionService.getSesion().then(actual =>{
        this.actual = actual.usuario;
        this.visible = true;
      });
    })
  }

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
      console.log(id);
      this.auxid = id;
    })

 }

 guardarImg(){
   this.buscarImage(this.auxid).subscribe(image =>{
     this.usuario.imagen=image;
     this.guardarDatosP();
     console.log(this.usuario.imagen);
   })
 }

 notificar(campo){
    if(campo == 'datos'){
      this.datos = true;
    }
  }
  noNotificar(campo){
    if(campo == 'datos'){
      this.datos = false;
    }
  }
  guardarDatosP(){
    this._usuarioService.setPersonales(this.usuario).subscribe(usuario => console.log(usuario));
  }
  cambiaEstado(estado: boolean, sitio: string){
    if(sitio == 'perfil'){
      this.usuario.pPerfilTodos = estado;
      this._usuarioService.setPrivacidad(this.usuario).subscribe(usuario => console.log(usuario));
    }
    if(sitio == 'contenido'){
      this.usuario.cPerfilTodos = estado;
      this._usuarioService.setPrivacidad(this.usuario).subscribe(usuario => console.log("Hola"));
    }
    if(sitio == 'amigos'){
      this.usuario.aPerfilTodos = estado;
      this._usuarioService.setPrivacidad(this.usuario).subscribe(usuario => console.log("Hola"));
    }
  }
}
