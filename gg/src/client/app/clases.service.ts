import {Injectable} from 'angular2/core';

import {Prod,infodetalle,comentario,usuario} from './clases';
import {prod_list,infolista,comentarios_list,usuarios_list} from './mock';

@Injectable()
export class clasesservice {
  getProductos (){
    return Promise.resolve (prod_list);
  }
  getProductosFiltro(juego:number,series:number,pelis:number){
    return Promise.resolve(prod_list).then( list => list.filter(prod => prod.tipoprod===juego || prod.tipoprod===series || prod.tipoprod===pelis))
  }
  getProductosTipo(tipo: number){
    return Promise.resolve(prod_list).then( list => list.filter(prod => prod.tipoprod===tipo))
  }
  getProd (id:number){
    return Promise.resolve(prod_list).then( list => list.filter(prod => prod.id===id))
  }
  getProdNombre (name:string){
    return Promise.resolve(prod_list).then( list => list.filter(prod => prod.name===name)[0])
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

  getusuarios(){
    return Promise.resolve (usuarios_list);
  }
  deleteUser(user:usuario){
    let position = usuarios_list.indexOf(user);
    usuarios_list.splice(position,1);
    console.log(position);
  }
  pushRespuesta(comentario:comentario){
    comentarios_list.push(comentario);
  }
}
