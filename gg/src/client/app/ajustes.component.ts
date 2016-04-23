import { Component } from 'angular2/core';
import { MenuComponent } from './menu.component';
import { SeleccionComponent } from './seleccion.component';
import { UsuarioService } from './usuario.service';
import { OnInit } from 'angular2/core';
import { Usuario } from './usuario'
import { Datos } from './datos';

@Component({
  selector: 'ajustes-component',
  templateUrl: 'app/ajustes.component.html',
  directives: [MenuComponent, SeleccionComponent],
  styleUrls: ['app/ajustes.component.css'],
  providers: [UsuarioService]
})

export class AjustesComponent  implements OnInit {
  //Variables
  usuario: Usuario;
  actual: string = 'castorTresDientes'
  visible: boolean = false;
  datos: boolean = false;
  contra: boolean = false;
  preContra: string = 'nada';
  //Metodos
  constructor(private _usuarioService: UsuarioService) {}
  ngOnInit() {
    this._usuarioService.getUsuario().then(usuario =>{
      this.usuario = usuario;
      this.visible = true;
      this.preContra = this.usuario.contrasena;
    });
  }
  notificar(campo){
    if(campo == 'datos'){
      this.datos = true;
    }
    if(campo == 'contra'){
      this.contra = true;
    }
  }
  prepaContra(){
    this.preContra = this.usuario.contrasena;
  }
  noNotificar(campo){
    if(campo == 'datos'){
      this.datos = false;
    }
    if(campo == 'contra'){
      this.contra = false;
    }
  }
  guardarDatosP(){
    this._usuarioService.setPersonales(this.usuario);
  }
  guardarContra(pass: string){
    this.usuario.contrasena = pass;
    this._usuarioService.setContraseña(this.usuario.contrasena);
  }
  cambiaEstado(estado: boolean, sitio: string){
    if(sitio == 'perfil'){
      this.usuario.datos.pPerfilTodos = estado;
      this._usuarioService.setPrivacidad(this.usuario.datos);
    }
    if(sitio == 'contenido'){
      this.usuario.datos.cPerfilTodos = estado;
      this._usuarioService.setPrivacidad(this.usuario.datos);
    }
    if(sitio == 'amigos'){
      this.usuario.datos.aPerfilTodos = estado;
      this._usuarioService.setPrivacidad(this.usuario.datos);
    }
  }
}
