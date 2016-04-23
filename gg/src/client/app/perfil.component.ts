import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { CuentaComponent } from './cuenta.component';
import { AmigosComponent } from './amigos.component';
import { AjustesComponent } from './ajustes.component';
import { ContenidoComponent } from './contenido.component';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'perfil-component',
  templateUrl: 'app/perfil.component.html',
  directives: [ROUTER_DIRECTIVES, CuentaComponent, AmigosComponent, AjustesComponent],
  styleUrls: [],
  providers: [ROUTER_PROVIDERS, UsuarioService]
})

@RouteConfig([
  {
    path: '/cuenta/id',
    name: 'Cuenta',
    component: CuentaComponent,
    useAsDefault: true,
  },
  {
  path: '/ajustes',
  name: 'Ajustes',
  component: AjustesComponent,
  },
  {
  path: '/amigos',
  name: 'Amigos',
  component: AmigosComponent,
  },
  {
  path: '/contenido',
  name: 'Contenido',
  component: ContenidoComponent,
  }
])

export class PerfilComponent{
}
