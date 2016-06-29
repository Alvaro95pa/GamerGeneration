import { Component } from 'angular2/core';
import { MenuComponent } from './menu.component';
import { SeleccionComponent } from './seleccion.component';
import { UsuarioService } from './usuario.service';
import { OnInit } from 'angular2/core';
import { Usuario } from './usuario.model';
import { RouteParams } from 'angular2/router';
import { SesionService } from './sesion.service';

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
  //Metodos
  constructor(private _usuarioService: UsuarioService, private _routeParams: RouteParams, private _sesionService: SesionService) {}
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
