import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from 'angular2/router';
import { PerfilComponent } from './perfil.component';
import { CuentaComponent } from './cuenta.component';

@Component({
  selector: 'main-component',
  templateUrl: 'app/main.component.html',
  directives: [ROUTER_DIRECTIVES, PerfilComponent],
  styleUrls: [],
  providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
  {
  path: '/perfil/...',
  name: 'Perfil',
  component: PerfilComponent,
  useAsDefault: true,
  }
])

export class MainComponent{
}
