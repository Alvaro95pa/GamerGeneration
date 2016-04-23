import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {FooterComponent} from './footer.component';
import {Home} from './home';
import {Analisis} from './analisis';
import {Admin} from './admin.model';
import {AdminService} from './admin.service';

@Component({
	selector: 'cabecera',
	templateUrl: 'app/cabecera.component.html',
	directives: [FooterComponent, Home, ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS, AdminService]
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
  }
])

export class CabeceraComponent {
	private user: String = '';
	private pass: String = '';
	admin: Admin;
	u: boolean = false;
	c: boolean = false;
	after: boolean = false;

	constructor(private _adminService: AdminService) {}

	inicioSesion(){
		this.admin = this._adminService.getAdmin();
		if((this.user == this.admin.usuario) && (this.pass == this.admin.contraseña)){
			this.u = true;
			this.c = true;
		} else if((this.user == this.admin.usuario) && (this.pass != this.admin.contraseña)){
				this.u = true;
		} else if((this.user != this.admin.usuario) && (this.pass == this.admin.contraseña)){
				this.c = true;
		}
		this.after = true;
	}

	cierreSesion(){
		this.after = false;
		this.u = false;
		this.c = false;
		this.user = '';
		this.pass = '';
	}

}
