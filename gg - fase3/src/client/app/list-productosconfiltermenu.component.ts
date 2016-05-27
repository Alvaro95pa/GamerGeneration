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
  directives: [proddetalleComponent]
})


export class listproductosconfiltermenucomponent implements OnInit {
  titulo = "Titulo";
  list_producto: Prod[];
  aux_tipoprod: number;

  constructor (private router: Router,private clasesservice: clasesservice,private _routeParams: RouteParams){}
  getProductosconfiltro(){
    /*
    let tipoprod = +this._routeParams.get('tipoprod');
    let filtro = this._routeParams.get('filtro');
    let tipo = this._routeParams.get('tipo');
    if (tipoprod == 1){
      if (tipo=="plat"){
        this.clasesservice.getProductosTipo(1).subscribe(list => list.filter(prod => prod.plataforma === filtro )).then(productos => this.list_producto = productos);
        //this.clasesservice.getProdPlataforma(filtro).then(list => this.list_producto = list );
      }
      if (tipo =="gen") {
        this.clasesservice.getProductosTipo(1).subscribe(list => list.filter(prod => prod.genero === filtro )).then(productos => this.list_producto = productos);
        //this.clasesservice.getProdGenero(filtro).then(list => this.list_producto = list);
      }
    }
    if (tipoprod ==2){
      this.clasesservice.getProductosTipo(2).subscribe(list => list.filter(prod => prod.genero === filtro )).subs(productos => this.list_producto = productos);
    }
    if (tipoprod==3){
      this.clasesservice.getProductosTipo(3).then(list => list.filter(prod => prod.genero === filtro )).then(productos => this.list_producto = productos);
    }
    this.aux_tipoprod = tipoprod;*/
  }
  ngOnInit (){
    this.getProductosconfiltro();
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
