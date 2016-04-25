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
  img:string;
  genero: string;
  plataforma: string;
}
export class infodetalle{
  id: number;
  tipoprod: number;
  name: string;
  img:string;
  trailer:string;
  infotecnic:infotecnica;
  inforequisitos: requisitosinfor;
  sinopsis:string;
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
  user:string;
  user_img:string;
  fecha:string;
  puntuacion:number;
  mensaje:string;
}
