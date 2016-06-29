import {Image} from './image.model';

export interface Prod {
  id?: number;
  tipoprod: number;
  name: string;
  img:Image;
  fecha:string;
  genero:string;

  plataforma:string;
  desarrollador:string;
  editor:string;

  procesador:string;
  memoria:string;
  grafica:string;
  almacenamiento:string;

  trailer:string;
  sinopsis:string;

  comentarios: comentario[];
}
export interface infodetalle{

}

export interface infotecnica{
  fecha: string;
  genero: string;
  plataforma: string;
  desarrollador: string;
  editor: string;
}

export interface requisitosinfor{
  procesador:string;
  memoria:string;
  graficos:string;
  almacenamiento:string;
}

export interface comentario{
  idcomentario?:number;
  idjuego:number;
  idcontenido:number;
  user:string;
  user_img:string;
  fecha:string;
  puntuacion:number;
  mensaje:string;
}
