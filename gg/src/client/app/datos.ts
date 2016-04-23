import { Prod } from './prod'
import { Amigo } from './amigos';

export class Datos {
  //Estadisticas
  nAmigos: string;
  nPelis: string;
  nSeries: string;
  nJuegos: string;
  //Informacion
  aportes: string;
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
