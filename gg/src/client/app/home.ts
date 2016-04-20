import {Component} from 'angular2/core';
import {CabeceraComponent} from './cabecera.component';
import {FooterComponent} from './footer.component';
import {ExpositorComponent} from './expositor.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';

@Component({
  selector: 'gg-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/home.html',
  directives: [ROUTER_DIRECTIVES, CabeceraComponent, FooterComponent, ExpositorComponent],
  pipes: []
})
@RouteConfig([

].concat(CliRouteConfig))

export class HomeApp {

}
