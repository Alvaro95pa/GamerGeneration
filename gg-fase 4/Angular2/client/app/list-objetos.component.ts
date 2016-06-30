import {Component,Input,OnInit} from 'angular2/core';
import {Prod} from './clases';
import {clasesservice} from './clases.service';
import {modoadminservice} from './modoadmin.service';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';
import {proddetalleComponent} from './prod-detalle.component'
import {SesionService} from './sesion.service';

@Component({
  selector:'listobjetos',
  template: `

    <div class="row admin fondo">
      <div class="col-sm-3 aux">

        <ul class="nav nav-pills nav-stacked col-sm-12 contorno">
          <li  [class.selected]="tipoopcion==1" (click)="gotoadmin_users('Users')"><a >Usuarios</a></li>
          <li  [class.selected]="tipoopcion==2" (click)="gotoadmin_contenido('Noticia')"><a >Noticias</a></li>
          <li  [class.selected]="tipoopcion==3" (click)="gotoadmin_contenido('Análisis')"><a >Analisis</a></li>
          <li  [class.selected]="tipoopcion==4" (click)="gotoadmin_productos()"><a >Productos</a></li>
          <li  (click)="gotoadmin_salir()"><a >Salir</a></li>
        </ul>
        <ul class=" filtroobjeto nav nav-pills nav-stacked col-sm-12 contorno">
          <li [class.selected]="tipoopcion==4" ><a ><h3>Filtro</h3></a></li>
          <li [class.selecteccheck]="juego==1" (click)="onVideojuegos()"><a >Videojuegos</a></li>
          <li [class.selecteccheck]="series==2" (click)="onSeries()"><a >Series</a></li>
          <li [class.selecteccheck]="pelis==3" (click)="onPeliculas()"><a >Peliculas</a></li>
        </ul>
        <button (click)="gotoAnadirProd()"  class="btnanadir btn btn-danger col-sm-12 col-xs-12"  >Añadir Producto</button>
      </div>
      <div class="col-sm-9">
        <ul class="listado">
          <li *ngFor="#produc of list_productos">
            <prod-detalle [prod]="produc" ></prod-detalle>
            <button (click)="eliminarProd(produc)" class="btn col-sm-10 col-xs-10"  >Eliminar</button>
          </li>
        </ul>
      </div>
    </div>
  `,
  directives: [proddetalleComponent]
})

export class listobjetos implements OnInit{
  tipoopcion:number;
  list_productos:Prod[];
  checkjuego:boolean = false;
  checkseries:boolean = false;
  checkpelis:boolean = false;
  juego:number = 0;
  series:number = 0;
  pelis:number = 0;

  constructor (private router: Router,private _sesionService: SesionService,private adminservice: modoadminservice,private clasesservice: clasesservice,private _routeParams: RouteParams){}

  onVideojuegos(){
    this.checkjuego=!this.checkjuego;
    if (this.checkjuego){
      this.juego=1;
    } else {
      this.juego=0;
    }
    if (!this.checkpelis && !this.checkseries && !this.checkjuego){
      this.getproductos();
    } else {
      this.getproductosfiltro();
    }
  }
  onSeries(){
    this.checkseries=!this.checkseries;
    if (this.checkseries){
      this.series=2;
    } else {
      this.series=0;
    }
    if (!this.checkpelis && !this.checkseries && !this.checkjuego){
      this.getproductos();
    } else {
      this.getproductosfiltro();
    }
  }
  onPeliculas(){
    this.checkpelis=!this.checkpelis;
    if (this.checkpelis){
      this.pelis=3;
    } else {
      this.pelis=0;
    }
    if (!this.checkpelis && !this.checkseries && !this.checkjuego){
      this.getproductos();
    } else {
      this.getproductosfiltro();
    }
  }
  eliminarProd(produc:Prod){
    this.adminservice.deleteProd(produc.id).subscribe(id =>{
      if (!this.checkpelis && !this.checkseries && !this.checkjuego){
        this.getproductos();
      } else {
        this.getproductosfiltro();
      }
    });

  }

  getproductos(){
    this.adminservice.getProductos().subscribe(list => this.list_productos=list);
  }
  getproductosfiltro(){
    this.adminservice.getProductosFiltro(this.juego,this.series,this.pelis).subscribe(list => this.list_productos=list);
  }
  getopcion(){
    let opcion = this._routeParams.get('opcion');
    this.tipoopcion=4;
  }
  ngOnInit(){
    this.getopcion();
    this.getproductos();
  }

  gotoadmin_users(){
    let link = ['AdminUsers'];
    this.router.navigate(link);
  }
  gotoadmin_contenido(opc:string){
    let link = ['AdminContenido',{tipo:opc}];
    this.router.navigate(link);
  }
  gotoadmin_productos(){
    let link = ['AdminProductos'];
    this.router.navigate(link);
  }
  gotoadmin_salir(){
    this._sesionService.logOut().subscribe(
  		response => {},
  		error => console.log("Error when trying to log out: "+error)
  	);
    let link = ['Home'];
    this.router.navigate(link);
  }
  gotoAnadirProd(){
    let link = ['AdminNewProducto'];
    this.router.navigate(link);
  }
}
