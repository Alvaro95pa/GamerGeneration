import {Component, OnInit} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {FooterComponent} from './footer.component';
import {Home} from './home';
import {Analisis} from './analisis';
import {Sesion} from './sesion.model';
import {Usuario} from './usuario.model';
import {SesionService} from './sesion.service';
import {UsuarioService} from './usuario.service';
import {AnalisisDetails} from './analisis-details';
import {registrar} from './registro.component';

@Component({
	selector: 'cabecera',
	templateUrl: 'app/cabecera.component.html',
	directives: [FooterComponent, Home, ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS, SesionService, UsuarioService]
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
	/*{
		path: '/noticias',
		name: 'Noticias',
		component: Noticias
	},*/
	{
		path: '/registro',
		name: 'Registro',
		component: registrar
	},
	/*{
		path: '/perfil/...',
		name: 'Perfil',
		component: PerfilComponent
	}
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
  }*/
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

			} else if((this.sesion.usuario == this.usr[i].usuario) && (this.sesion.contrasena != this.usr[i].contrasena)){
					this.sesion.user = true;
			} else if((this.sesion.usuario != this.usr[i].usuario) && (this.sesion.contrasena == this.usr[i].contrasena)){
					this.sesion.pass = true;
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
