import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { CuentaComponent } from './cuenta.component';
import { AmigosComponent } from './amigos.component';
import { AjustesComponent } from './ajustes.component';
import { ContenidoComponent } from './contenido.component';
import { UsuarioService } from './usuario.service';
import { GenteComponent } from './gente.component'

@Component({
  selector: 'perfil-component',
  templateUrl: 'app/perfil.component.html',
  directives: [CuentaComponent, AmigosComponent, AjustesComponent, RouterOutlet],
  styleUrls: [],
  providers: [UsuarioService]
})

@RouteConfig([
  {
    path: '/',
    name: 'MiPerfil',
    component: CuentaComponent,
  },{
    path: '/Cuenta/:id',
    name: 'Cuenta',
    component: CuentaComponent,
  },
  {
  path: '/ajustes/:id',
  name: 'Ajustes',
  component: AjustesComponent,
  },
  {
  path: '/amigos/:id',
  name: 'Amigos',
  component: AmigosComponent,
  },
  {
  path: '/contenido/:id',
  name: 'Contenido',
  component: ContenidoComponent,
  },
  {
  path: '/gente',
  name: 'Gente',
  component: GenteComponent,
  }
])

export class PerfilComponent{
}
