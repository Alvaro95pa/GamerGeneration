import {Component,OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';
import {Usuario} from './usuario.model';
import {Prod,infodetalle,infotecnica,requisitosinfor,comentario} from './clases';
import {Sesion} from './sesion.model';
import {comentarioscomponent} from './comentarios.component';
import {clasesservice} from './clases.service';
import {SesionService} from './sesion.service';
import {UsuarioService} from './usuario.service';


@Component({
  selector:'prod-detalle',
  template: `
    <div class="panel-group">
      <div class="panel panel-danger">
        <div class="panel-heading">Datos Básicos</div>
        <div class="panel-body">
          <div  class="datos col-md-9 col-xs-7">
            <h4>Información técnica</h4>
            <dl  *ngIf="aux_tipoprod!=1 && visible">
              <dt>Fecha de lanzamiento: </dt>
              <dd>{{produc.fecha}}</dd>
              <dt>Género: </dt>
              <dd><span class="label label-default">{{produc.genero}}</span></dd>
              <dt>Director:</dt>
              <dd>{{produc.desarrollador}}</dd>
              <dt>Patrocinador:</dt>
              <dd>{{produc.editor}}</dd>
            </dl>
            <dl  *ngIf="aux_tipoprod==1 && visible">
              <dt>Fecha de lanzamiento: </dt>
              <dd>{{produc.fecha}}</dd>
              <dt>Género: </dt>
              <dd><span class="label label-default">{{produc.genero}}</span></dd>
              <dt>Desarrollador:</dt>
              <dd>{{produc.desarrollador}}</dd>
              <dt>Editor:</dt>
              <dd>{{produc.editor}}</dd>
              <dt>Plataformas:</dt>
              <dd><span class="label label-default">{{produc.plataforma}}</span></dd>
            </dl>
            <div *ngIf="aux_tipoprod==1 && visible">
              <h4>Requisitos del sistema</h4>
              <dl>
                <dt>Procesador:</dt>
                <dd>{{produc.procesador}}</dd>
                <dt>Memoria:</dt>
                <dd>{{produc.memoria}}</dd>
                <dt>Gráficos:</dt>
                <dd>{{produc.grafica}}</dd>
                <dt>Almacenamiento:</dt>
                <dd>{{produc.almacenamiento}}</dd>
              </dl>
            </div>
          </div>

          <div class="portada col-md-3 col-xs-5">
            <img src={{produc.img.url}}>
            <div  (click)="AddSeguir(produc)" [class.checkfavorito]="seguir" class="favorito col-md-12 col-xs-12">
              <div><span class="glyphicon glyphicon-plus"></span>Seguir</div>
            </div>
          </div>

        </div>
      </div>
      <div *ngIf="visible" class="panel panel-danger sinopsis">
        <div class="panel-heading">Sinopsis</div>
        <div class="panel-body">
          <p>{{produc.sinopsis}}</p>
        </div>
      </div>

      <div *ngIf="visible" class="panel panel-danger trailer">
        <div class="panel-heading">Trailer</div>
        <div class="panel-body ">
           <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src={{produc.trailer}}></iframe>
           </div>
        </div>
      </div>

      <div *ngIf="visible" class="panel panel-danger comentarios">
        <div class="panel-heading">Comentarios</div>
        <div class="panel-body">
          <div *ngFor="#coment of produc.comentarios">
            <comentarios [comentario]="coment"></comentarios>
          </div>
        </div>
       </div>

       <div  class="panel panel-danger comentarios respuesta">
        <div class="panel-heading">
          <button type="button" class="btn btn-primary btn_respuesta" onclick="document.getElementById('oculto').style.display = 'block';"><span class="glyphicon glyphicon-plus"></span> Responder</button></div>
        <div class="panel-body" id="oculto" style='display:none;'>
          <div class="col-md-12 col-xs-12 respuesta">
            <header class="col-md-2 col-xs-2">
              <dl>

                <dd><a>sesion.nombre</a></dd>
              </dl>
            </header>
            <div class="col-sm-10 col-xs-10">
              <div class="text col-sm-12 col-xs-12">
                <div class="col-sm-10">
                  <p>Mensaje:</p>
                  <textarea class="mens"   [(ngModel)]="respuesta">Escribe</textarea>
                </div>
                <div class="col-sm-2 col-xs-4 nota">
                  <p>Puntuación:</p>
                  <input class="col-sm-9 col-xs4"   [(ngModel)]="nota">
                </div>
              </div>
              <button (click)="enviarcomentario()" id="btn_enviar" class="col-sm-2 col-xs-12">Enviar</button>
              <div *ngIf="error" class="msg_error"><p >Debe introducir una puntuación entre 1 y 10</p></div>
            </div>
          </div>
        </div>
        </div>

    </div>
  `,
  directives: [comentarioscomponent]
})
//<!--*ngIf="sesion.loged"-->
export class informacionprod implements OnInit{
  produc: Prod;
  aux_tipoprod: number;
  aux_id:number;
  comentarios:comentario[];
  visible: boolean =  false;
  respuesta:string;
  nota:number;
  resp_comentario:comentario;
  error:boolean =false;

  seguir:boolean =false;
  favorito:boolean =false;
  logeado:boolean = true;
  id_user=1;

  loged:boolean;
  usuario: Usuario;
  aux_prod:Prod;


  constructor (private router: Router,private UsuarioService: UsuarioService,private SesionService: SesionService,private clasesservice: clasesservice,private _routeParams: RouteParams){}
  AddSeguir(info:Prod){
    /*
    this.seguir=!this.seguir;
    if(this.seguir){
      this.UsuarioService.addContenido(this.aux_prod,this.sesion.id);
    } else {
      this.UsuarioService.removeContenido(this.aux_prod,this.sesion.id);
    }
    console.log(info.id);
    */
  }

  getsesion(){
    this.loged = this.SesionService.getLogged();
    this.usuario = this.SesionService.getSesion();
  }
  getProducto(){
    let id = +this._routeParams.get('idprod');
    let tipoprod = +this._routeParams.get('tipoprod');
    this.clasesservice.getProd(id).subscribe(prod =>{
      this.produc = prod
      console.log(id + " "+ prod.name + " "+ this.produc.name + " "+ this.produc.grafica);
      this.visible=true;
    } );
    this.aux_tipoprod=tipoprod;
    this.aux_id=id;
  }
  getcomentarios(){
    let id = +this._routeParams.get('idprod');
    this.comentarios = this.produc[0].comentarios;
  }
  ngOnInit() {
    this.getProducto();
    //this.getcomentarios();
    //this.getsesion();
    this.clasesservice.getProd(this.aux_id).subscribe(prod => this.aux_prod=prod[0]);

  }
  enviarcomentario(){
    if(this.nota>10 || this.nota<0){
      this.error=true;
    } else {
      this.resp_comentario = {
        idcomentario:this.usuario.id,
        idjuego:0,
        idcontenido:this.aux_id,
        user:this.usuario.usuario,
        user_img:this.usuario.imagen.url,
        fecha:"Hoy",
        puntuacion:0,
        mensaje:this.respuesta
      };
      this.produc.comentarios.push(this.resp_comentario);
      this.clasesservice.actualizarProducto(this.produc);
    }
  }
}
