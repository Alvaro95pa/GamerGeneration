import {Component,OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';

import {Prod} from './clases';
import {clasesservice} from './clases.service';
import {proddetalleComponent} from './prod-detalle.component'

@Component({
  selector: 'list-productos',
  templateUrl: 'app/list-productos.html',
  providers: [],
  styleUrls:  ['style_j.css'],
  directives: [proddetalleComponent]
})


export class listproductoscomponent implements OnInit {
  titulo = "Titulo";
  list_producto: Prod[];
  aux_tipoprod: number;

  constructor (private router: Router,private clasesservice: clasesservice,private _routeParams: RouteParams){}
  getProductos(){
    let tipoprod = +this._routeParams.get('tipoprod');
    if (tipoprod ==1 || tipoprod ==2 || tipoprod==3){
      this.clasesservice.getProductosTipo(tipoprod).then(productos => this.list_producto = productos);
      this.aux_tipoprod=tipoprod;
    } else {
      this.clasesservice.getProductosTipo(1).then(productos => this.list_producto = productos);
      this.aux_tipoprod=1;
    }
  }
  ngOnInit (){
    this.getProductos();
  }

  gotoFiltrar(tip:String,filt:String){
    let link = ['FiltroJ',{tipoprod:this.aux_tipoprod,tipo: tip,filtro: filt}];
    this.router.navigate(link);
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
