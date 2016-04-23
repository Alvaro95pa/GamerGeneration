import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {CAROUSEL_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {Contenido} from './contenido.model';
import {ContenidoService} from './contenido.service';

@Component({
  selector: 'expositor',
  directives: [CAROUSEL_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
  templateUrl: 'app/expositor.component.html',
  providers: [ContenidoService]
})

export class ExpositorComponent {
  public myInterval:number = 5000;
  public noWrapSlides:boolean = false;
  public slides:Array<any> = [];
  contenido: Contenido[] = [];

  public constructor(private _contentService: ContenidoService) {
    this.addSlide();
  }

  ngOnInit(){
		this._contentService.getContenido().then(contenido =>{
      this.contenido = contenido;
    });
	}

  public addSlide():void {
    for(let i=0; i<this.contenido.length; i++){
      if(this.contenido[i].dest.destacado){
        this.slides.push({
          image: 'this.contenido[i].dest.imgn',
          text: 'this.contenido[i].titulo'
        })
      }
    }
  }

  public removeSlide(index:number):void {
    this.slides.splice(index, 1);
  }
}
