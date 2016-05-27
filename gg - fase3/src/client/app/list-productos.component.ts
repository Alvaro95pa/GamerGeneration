import {Component,OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';

import {Prod} from './clases';
import {clasesservice} from './clases.service';
import {proddetalleComponent} from './prod-detalle.component';
import {HTTP_PROVIDERS, Http} from 'angular2/http';


@Component({
  selector: 'list-productos',
  templateUrl: 'app/list-productos.html',
  providers: [HTTP_PROVIDERS],
  directives: [proddetalleComponent]
})


export class listproductoscomponent implements OnInit {
  titulo = "Titulo";
  list_producto: Prod[];
  aux_tipoprod: number;
  visible:boolean = false;

  constructor (private router: Router,private clasesservice: clasesservice,private _routeParams: RouteParams){}
  getProductos(){
    let tipoprod = +this._routeParams.get('tipoprod');
    if (tipoprod ==1 || tipoprod ==2 || tipoprod==3){
      this.clasesservice.getProductosTipo(tipoprod).subscribe(productos => this.list_producto = productos);
      this.aux_tipoprod=tipoprod;
    } else {
      this.clasesservice.getProductosTipo(1).subscribe(productos => {
        this.list_producto = productos
        this.visible=true
      });
      this.aux_tipoprod=1;
    }
  }
  ngOnInit (){
    this.getProductos();
  }

  gotoFiltrar(tipo:String,filt:String){
    if(tipo !="genero"){
      console.log(tipo +" "+this.aux_tipoprod+" " +filt);
      this.clasesservice.getProdPlataforma(this.aux_tipoprod,filt).subscribe(prod => this.list_producto = prod);
    } else {
      console.log(tipo +" "+this.aux_tipoprod+" " +filt);
      this.clasesservice.getProdGenero(this.aux_tipoprod,filt).subscribe(prod => this.list_producto = prod);
    }
  }

  gotoDetalles(prod:Prod){
    let link = ['Detalleprod',{tipoprod:this.aux_tipoprod,idprod:prod.id}];
    this.router.navigate(link);
  }
  gotoTipoprod(tipo:number){
    let link = ['SelecCatalogo',{tipoprod:tipo}];
    this.router.navigate(link);
  }
}
