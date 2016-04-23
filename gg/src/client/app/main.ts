import {Component,OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import { Router } from 'angular2/router';

import {Prod} from './clases';
import {clasesservice} from './clases.service';
import {proddetalleComponent} from './prod-detalle.component';
import {listproductoscomponent} from './list-productos.component';
import {listproductosconfiltermenucomponent} from './list-productosconfiltermenu.component';

import {informacionprod} from './informacion-prod'




@Component({
  selector: 'main-app',
  template:`
       <div class="container">
        <router-outlet></router-outlet>
       </div>


  `,
  providers: [ROUTER_PROVIDERS,clasesservice],
  styleUrls:  ['style.css'],
  directives: [ROUTER_DIRECTIVES,proddetalleComponent],
  pipes: [],

})
@RouteConfig([
  { path : '/', redirectTo : ['Princ_Catalogo'] },
  {
    path:'/Catalogo/1/',
    name: 'Princ_Catalogo',
    component: listproductoscomponent,
  },
  {
    path: '/Catalogo/:tipoprod/:idprod',
    name: 'Detalleprod',
    component:informacionprod
  },
  {
    path:'/Catalogo/:tipoprod/:tipo/:filtro',
    name: 'FiltroJ',
    component: listproductosconfiltermenucomponent,
  },
  {
    path:'/Catalogo/:tipoprod',
    name: 'SelecCatalogo',
    component: listproductoscomponent,
  }

])
export class MainApp {
  constructor ( private router: Router,private clasesservice: clasesservice){}

  gotoTipoprod(tipo:number){
    let link = ['SelecCatalogo',{tipoprod:tipo}];
    this.router.navigate(link);
  }
}
