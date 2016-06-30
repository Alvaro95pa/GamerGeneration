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
            <img *ngIf="visible" src="images/{{produc.img.url}}">
            <div *ngIf="loged && visible"  (click)="AddSeguir(produc)" [class.checkfavorito]="seguir" class="favorito col-md-12 col-xs-12">
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

       <div *ngIf="loged && visible_usuario" class="panel panel-danger comentarios respuesta">
        <div class="panel-heading">
          <button type="button" class="btn btn-primary btn_respuesta" onclick="document.getElementById('oculto').style.display = 'block';"><span class="glyphicon glyphicon-plus"></span> Responder</button></div>
        <div class="panel-body" id="oculto" style='display:none;'>
          <div class="col-md-12 col-xs-12 respuesta">
            <header class="col-md-2 col-xs-2">
              <dl>
                <dd><img *ngIf="visible_usuario && usuario.imagen != null" src="images/{{usuario.imagen.url}}"></dd>
                <dd><a>{{usuario.usuario}}</a></dd>
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
  i: number;
  seguir:boolean =false;
  favorito:boolean =false;
  logeado:boolean = true;
  id_user=1;

  loged:boolean;
  visible_usuario:boolean=false
  usuario: Usuario;
  usuario_actual: Usuario;
  aux_prod:Prod;


  constructor (private router: Router,private UsuarioService: UsuarioService,private SesionService: SesionService,private clasesservice: clasesservice,private _routeParams: RouteParams){}
  comprobarSeguir(){
    for(let col of this.usuario_actual.coleccion){
      if(col.id == this.produc.id){
        this.seguir = true;
      }
    }
  }
  AddSeguir(info:Prod){
    this.seguir = !this.seguir;
    if(this.seguir){
      this.UsuarioService.addContenido(info,this.usuario).subscribe();
    } else {
      if(info.tipoprod == 3){
        if(info.name == this.usuario.fPeli.name){
          this.usuario.fPeli = null;
          this.UsuarioService.removeFav(this.usuario).subscribe();
        }
        this.usuario.nPelis = this.usuario.nPelis - 1;
      }
      if(info.tipoprod == 2){
        if(info.name == this.usuario.fSerie.name){
          this.usuario.fSerie = null;
          this.UsuarioService.removeFav(this.usuario).subscribe();
        }
        this.usuario.nSeries = this.usuario.nSeries - 1;
      }
      if(info.tipoprod == 1){
        if(info.name == this.usuario.fJuego.name){
          this.usuario.fJuego = null;
          this.UsuarioService.removeFav(this.usuario).subscribe();
        }
        this.usuario.nJuegos = this.usuario.nJuegos - 1;
      }
      let posicion = this.usuario.coleccion.indexOf(info);
      this.usuario.coleccion.splice(posicion,1);
      this.UsuarioService.removeContenido(this.usuario).subscribe();
    }
  }

  getsesion(){
    this.loged = this.SesionService.getLogged();
    if (this.loged){
      this.SesionService.getSesion().then(actual =>{
        this.usuario = actual;
        this.UsuarioService.getUsuario(actual.id).subscribe(usuario =>{
          this.usuario_actual = usuario;
          this.comprobarSeguir();
          this.visible_usuario=true;
        });
      });


    } else {
      this.usuario = {
        id:-1,
        roles:null,
        nombre:"invitado",
        apellidos:"invitado",
        nacionalidad:null,
        cumpleanos:null,
        usuario:"invitado",
        contrasena:null,
        correo:null,
        imagen:null,
        nAmigos:null,
        nPelis:null,
        nSeries:null,
        nJuegos:null,
        ultima:null,
        tUsuario:null,
        fPeli:null,
        fSerie:null,
        fJuego:null,
        pPerfilTodos:null,
        cPerfilTodos:null,
        aPerfilTodos:null,
        coleccion:null,
        amigos:null
      }}
  }

  getProducto(){
    let id = +this._routeParams.get('idprod');
    let tipoprod = +this._routeParams.get('tipoprod');
    this.clasesservice.getProd(id).subscribe(prod =>{
      this.produc = prod;
      this.getsesion();
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
    this.clasesservice.getProd(this.aux_id).subscribe(prod => this.aux_prod=prod[0]);
  }
  enviarcomentario(){
    if(this.nota>10 || this.nota<0){
      this.error=true;
    } else {
      this.resp_comentario = {
        idjuego:this.produc.id,
        idcontenido:0,
        user:this.usuario.usuario,
        user_img:this.usuario.imagen.url,
        fecha:"Hoy",
        puntuacion:this.nota,
        mensaje:this.respuesta
      };
      this.produc.comentarios.push(this.resp_comentario);

      this.clasesservice.actualizarProducto(this.produc).subscribe(prod =>{
        console.log(prod);
        console.log(this.produc.comentarios);
      });
    }
  }
}
