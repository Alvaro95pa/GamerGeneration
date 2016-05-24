import {Component, OnInit} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {FooterComponent} from './footer.component';
import {Home} from './home';
import {Analisis} from './analisis';
import {Sesion} from './sesion.model';
import {Usuario} from './usuario.model';
import {Noticias} from './noticias.component';
import {SesionService} from './sesion.service';
import {UsuarioService} from './usuario.service';
import {AnalisisDetails} from './analisis-details';
import {NoticiaDetails} from './noticia-detail.component';
import {registrar} from './registro.component';
import {CuentaComponent} from './cuenta.component';
import { ContenidoComponent } from './contenido.component';
import {Prod} from './clases';
import {clasesservice} from './clases.service';
import {modoadminservice} from './modoadmin.service';
import {AdminService} from './admin.service';
import { AmigosComponent } from './amigos.component';
import { AjustesComponent } from './ajustes.component';
import { GenteComponent } from './gente.component';
import {ContenidoService} from './contenido.service'
import {proddetalleComponent} from './prod-detalle.component';
import {listproductoscomponent} from './list-productos.component';
import {listproductosconfiltermenucomponent} from './list-productosconfiltermenu.component';
import {informacionprod} from './informacion-prod.component';
import {listusers} from './list-users.component';
import {listcontenido} from './list-contenido.component';
import {anadircontenido} from './anadircontenido.component';
import {anadirproducto} from './anadirproducto.component';
import {listobjetos} from './list-objetos.component';
import {loginadmin} from './adminlogin.component';

@Component({
	selector: 'cabecera',
	templateUrl: 'app/cabecera.component.html',
	directives: [FooterComponent, Home, ROUTER_DIRECTIVES, CuentaComponent, AmigosComponent, AjustesComponent],
	providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, SesionService, UsuarioService, modoadminservice, clasesservice, ContenidoService, AdminService]
})
@RouteConfig([
  {
    path: '/home',
    name: 'Home',
    component: Home,
    useAsDefault: true
  },
  {
    path: '/analisis',
    name: 'Analisis',
    component: Analisis
  },
	{
		path: '/analisis/:id',
		name: 'AnalisisDetalles',
		component: AnalisisDetails
	},
	{
		path: '/noticias',
		name: 'Noticias',
		component: Noticias
	},
	{
		path: '/noticias/:id',
		name: 'NoticiaDetails',
		component: NoticiaDetails
	},
	{
		path: '/registro',
		name: 'Registro',
		component: registrar
	},
	{
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
	},
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
    path:'/Admin',
    name: 'AdminLogin',
    component: loginadmin
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

export class CabeceraComponent implements OnInit{
	sesion: Sesion;
	usr: Usuario[] = [];
	visible: boolean = false;

	constructor(private _sesionService: SesionService, private _usuarioService: UsuarioService) {}

	ngOnInit(){
		this._sesionService.getSesion().then(sesion =>{
      this.sesion = sesion;
			this.visible = true;
		})
	};

	inicioSesion(){
		this.usr = this._usuarioService.getUsuarios2();
		for(let i=0; i<this.usr.length; i++){
			if((this.sesion.usuario == this.usr[i].usuario) && (this.sesion.contrasena == this.usr[i].contrasena)){
				this.sesion.user = true;
				this.sesion.pass = true;
				this.sesion.imagen = this.usr[i].imagen;
				this.sesion.id = this.usr[i].id;

			} else if((this.sesion.usuario == this.usr[i].usuario) && (this.sesion.contrasena != this.usr[i].contrasena)){
					this.sesion.user = true;
          this.sesion.pass = false;
			} else if((this.sesion.usuario != this.usr[i].usuario) && (this.sesion.contrasena == this.usr[i].contrasena)){
					this.sesion.pass = true;
          this.sesion.user = false;
			}
		}
		this.sesion.loged = true;
		this._sesionService.setSesion(this.sesion);
	}

	cierreSesion(){
		this.sesion.user = false;
		this.sesion.pass = false;
		this.sesion.usuario = '';
		this.sesion.contrasena = '';
		this.sesion.loged = false;
		this._sesionService.setSesion(this.sesion);
	}

}
