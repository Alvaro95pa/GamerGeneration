import {Injectable} from 'angular2/core';

import {Prod,infodetalle,comentario} from './clases';
import {prod_list,infolista,comentarios_list} from './mock';

@Injectable()
export class clasesservice {
  getProductos (){
    return Promise.resolve (prod_list);
  }
  getProductosTipo(tipo: number){
    return Promise.resolve(prod_list).then( list => list.filter(prod => prod.tipoprod===tipo))
  }
  getProd (id:number){
    return Promise.resolve(prod_list).then( list => list.filter(prod => prod.id===id))
  }
  getProdPlataforma(plat: string){
    return Promise.resolve(prod_list).then(list => list.filter(prod => prod.plataforma === plat ));
  }
  getProdGenero(gen: string){
    return Promise.resolve(prod_list).then(list => list.filter(prod => prod.genero === gen ));
  }

  getinfo(id:number){
    return Promise.resolve(infolista).then( list => list.filter(prod => prod.id===id))
  }
  getcomentarios(idjuego:number){
    return Promise.resolve(comentarios_list).then( list => list.filter( prod => prod.idjuego === idjuego))
  }

  pushRespuesta(comentario:comentario){
    comentarios_list.push(comentario);
  }
}
