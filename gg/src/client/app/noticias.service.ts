import {Injectable} from 'angular2/core';
import {NOTICIAS} from './mock-noticias';
import {Noticia} from './noticia';

@Injectable()
export class NoticiaService {
  getNoticias() {
    return Promise.resolve(NOTICIAS);
  }
  // See the "Take it slow" appendix
  getNoticiasSlowly() {
    return new Promise<Noticia[]>(resolve =>
      setTimeout(()=>resolve(NOTICIAS), 2000) // 2 seconds
    );
  }
}
