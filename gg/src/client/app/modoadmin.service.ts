import {Injectable} from 'angular2/core';

import {Prod,infodetalle,comentario,usuario} from './clases';
import {Contenido} from './contenido.model';
import {prod_list,infolista,comentarios_list,usuarios_list} from './mock';
import {CONTENIDO} from './mock-contenido';

@Injectable()
export class modoadminservice {
  getProductos (){
    return Promise.resolve (prod_list);
  }
  getProductosFiltro(juego:number,series:number,pelis:number){
    return Promise.resolve(prod_list).then( list => list.filter(prod => prod.tipoprod===juego || prod.tipoprod===series || prod.tipoprod===pelis))
  }
  getProd (id:number){
    return Promise.resolve(prod_list).then( list => list.filter(prod => prod.id===id))
  }
  getinfo(id:number){
    return Promise.resolve(infolista).then( list => list.filter(prod => prod.id===id))
  }

  getusuarios(){
    return Promise.resolve (usuarios_list);
  }
  deleteUser(user:usuario){
    let position = usuarios_list.indexOf(user);
    usuarios_list.splice(position,1);
    console.log(position);
  }
  deleteProd(produc:Prod){
    let position = prod_list.indexOf(produc);
    prod_list.splice(position,1);
  }
  pushProd(produc:Prod,info:infodetalle){
    prod_list.push(produc);
    infolista.push(info);
  }
  deleteContenido(content:Contenido){
    let position = CONTENIDO.indexOf(content);
    CONTENIDO.splice(position,1);
  }
  pushContenido(content:Contenido){
    CONTENIDO.push(content);
  }
}
