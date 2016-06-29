import {Component, OnInit} from 'angular2/core';
import {Contenido} from './contenido.model';
import {ContenidoService} from './contenido.service';
import {clasesservice} from './clases.service';
import {SesionService} from './sesion.service';
import { RouteParams } from 'angular2/router';
import {Prod,comentario} from './clases';
import {Usuario} from './usuario.model';
import {Image} from './image.model';
import {comentarioscomponent} from './comentarios.component';

@Component({
  selector: 'analisis-detalles',
  templateUrl: 'app/analisis-details.html',
  providers: [ContenidoService, clasesservice],
  directives: [comentarioscomponent]
})

export class AnalisisDetails implements OnInit{
  contenido: Contenido;
  visible: boolean = false;
  visible_usuario: boolean = false;
  error:boolean =false;
  producto: Prod;
  comentarios:comentario[];
  resp_comentario:comentario;
  loged:boolean;
  usuario: Usuario;
  aux_id:number;
  respuesta:string;

  constructor(private _sesionService: SesionService,private _contentService: ContenidoService, private _clasesService: clasesservice,
    private _routeParams: RouteParams) {}

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._contentService.getContenidoId(id).subscribe(contenido =>{
      this.contenido = contenido;
      this.visible = true;
      if(contenido.nProducto != null){
        this.getProducto(contenido.nProducto);
      }
    });
    this.getComentarios();
    this.getsesion();
  }

  private getProducto(nombre: string){
    this._clasesService.getProdNombre(nombre).subscribe(producto =>{
      this.producto = producto;
    })
  }

  getComentarios(){
    let id = +this._routeParams.get('id');
    this.aux_id=id;
    this._clasesService.getcomentariosContenido(id).subscribe( list => this.comentarios = list);
  }

  getsesion(){
    this.loged = this._sesionService.getLogged();
    this._sesionService.getSesion().then(
      actual => {
        this.usuario = actual,
        this.visible_usuario = true;
    });
  }

  enviarcomentario(){
      this.resp_comentario = {
        idjuego:0,
        idcontenido:this.contenido.id,
        user:this.usuario.usuario,
        user_img:this.usuario.imagen.url,
        fecha:"Hoy",
        puntuacion:0,
        mensaje:this.respuesta
      };
      this.contenido.comentarios.push(this.resp_comentario);
      console.log(this.contenido.comentarios);

      this._contentService.actualizarContenido(this.contenido).subscribe(cont =>{
        console.log("Hecho");
      });
  }
}
