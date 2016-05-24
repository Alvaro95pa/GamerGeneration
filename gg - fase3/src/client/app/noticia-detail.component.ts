import {Component, OnInit} from 'angular2/core';
import {Contenido} from './contenido.model';
import {ContenidoService} from './contenido.service';
import {clasesservice} from './clases.service';
import {SesionService} from './sesion.service';
import { RouteParams } from 'angular2/router';
import {Prod,comentario} from './clases';
import {Sesion} from './sesion.model';
import {comentarioscomponent} from './comentarios.component';

@Component({
  selector: 'noticia-detalles',
  templateUrl: 'app/noticia-detail.component.html',
  providers: [ContenidoService, clasesservice],
  directives: [comentarioscomponent]
})

export class NoticiaDetails implements OnInit{
  contenido: Contenido;
  visible: boolean = false;
  producto: Prod;
  comentarios:comentario[];
  resp_comentario:comentario;
  sesion:Sesion;

  aux_id:number;
  respuesta:string;

  constructor(private SesionService: SesionService,private _contentService: ContenidoService, private _clasesService: clasesservice,
    private _routeParams: RouteParams) {}

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._contentService.getContenidoId(id).subscribe(contenido =>{
      this.contenido = contenido;
      this.visible = true;
      this._clasesService.getProdNombre(this.contenido.nombreProd).then(producto =>{
        this.producto = producto;
      })
    });
    this.getComentarios();
    this.getsesion();
  }

  getComentarios(){
    let id = +this._routeParams.get('id');
    this.aux_id=id;
    this._clasesService.getcomentariosContenido(id).then( list => this.comentarios = list);
  }
  getsesion(){
    this.SesionService.getSesion().then(login => {
      this.sesion=login;
      console.log(this.sesion.usuario);
    });
  }
  enviarcomentario(){

    this.resp_comentario = {
      idcomentario:this.sesion.id,
      idjuego:0,
      idcontenido:this.aux_id,
      user:this.sesion.usuario,
      user_img:this.sesion.imagen,
      fecha:"Hoy",
      puntuacion:0,
      mensaje:this.respuesta
    };
    this._clasesService.pushRespuesta(this.resp_comentario);
    this.getComentarios();
    console.log(this.resp_comentario.mensaje);

  }
}
