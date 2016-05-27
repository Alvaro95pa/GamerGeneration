import {Image} from './image.model';


export class usuario{
  id:number;
  nombre:string;
  apellidos:string;
  img:string;
  nacionalidad:string;
  cumpleanos:string;
  usuario:string;
  contraseña:string;
  correo:string;
}
export class Prod {
  id: number;
  tipoprod: number;
  name: string;
  img:Image; // Cambiar mas adelante por el tipo imagen q usa alvaro
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
export class infodetalle{

}

export class infotecnica{
  fecha: string;
  genero: string;
  plataforma: string;
  desarrollador: string;
  editor: string;
}

export class requisitosinfor{
  procesador:string;
  memoria:string;
  graficos:string;
  almacenamiento:string;
}

export class comentario{
  idcomentario:number;
  idjuego:number;
  idcontenido:number;
  user:string;
  user_img:string;
  fecha:string;
  puntuacion:number;
  mensaje:string;
}
