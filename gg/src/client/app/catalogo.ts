import {Component,OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS,Router} from 'angular2/router';

import {Prod} from './clases';
import {clasesservice} from './clases.service';
import {adminservice} from './modoadmin.service';
import {ContenidoService} from './contenido.service'
import {proddetalleComponent} from './prod-detalle.component';
import {listproductoscomponent} from './list-productos.component';
import {listproductosconfiltermenucomponent} from './list-productosconfiltermenu.component';
import {informacionprod} from './informacion-prod';
import {listusers} from './list-users';
import {listcontenido} from './list-contenido';
import {listobjetos} from './list-objetos';anadirproducto
import {anadircontenido} from './anadircontenido';
import {anadirproducto} from './anadirproducto';

import {registrar} from './registro';




@Component({
  selector: 'catalogo',
  template:`
       <div class="container">
        <a (click)="gotoadmin_users()">Admin</a>
        <a (click)="gotocatalogo()">catalogo</a>
        <router-outlet></router-outlet>
       </div>


  `,
  providers: [ROUTER_PROVIDERS,adminservice,clasesservice,ContenidoService],
  styleUrls:  ['style_j.css'],
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
  },
  {
    path:'/Admin/Users',
    name: 'AdminUsers',
    component: listusers
  },
  {
    path:'/Admin/:tipo',
    name: 'AdminContenido',
    component: listcontenido
  },
  {
    path:'/Admin/:tipo/:nuevo',
    name: 'AdminNewContenido',
    component: anadircontenido
  },
  {
    path:'/Admin/Productos',
    name: 'AdminProductos',
    component: listobjetos
  },
  {
    path:'/Admin/Productos/AñadirProducto',
    name: 'AdminNewProducto',
    component: anadirproducto
  }
])
export class catalogoApp {
  constructor ( private router: Router,private clasesservice: clasesservice){}

  gotoregistro(){
    let link = ['Registrarse'];
    this.router.navigate(link);
  }
  gotoadmin_users(){
    let link = ['AdminUsers'];
    this.router.navigate(link);
  }
  gotocatalogo(){
    let link = ['Princ_Catalogo'];
    this.router.navigate(link);
  }
}
