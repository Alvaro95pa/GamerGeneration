import { Prod } from './prod.model'
import { Amigo } from './amigos.model';

export class Datos {
  //Estadisticas
  nAmigos: number;
  nPelis: number;
  nSeries: number;
  nJuegos: number;
  //Informacion
  ultima: string;
  tUsuario: string;
  //Favoritos
  fPeli: Prod;
  fSerie: Prod;
  fJuego: Prod;
  //Privacidad
  pPerfilTodos: boolean;
  cPerfilTodos: boolean;
  aPerfilTodos: boolean;
  //Contenido
  contenido: Prod[];
  //Amigos
  amigos: Amigo[];
}
