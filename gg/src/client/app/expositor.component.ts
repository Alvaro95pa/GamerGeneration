import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {CAROUSEL_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';


@Component({
  selector: 'expositor',
  directives: [CAROUSEL_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
  templateUrl: 'app/expositor.component.html'
})

export class ExpositorComponent {
  public myInterval:number = 5000;
  public noWrapSlides:boolean = false;
  public slides:Array<any> = [];

  public constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  public addSlide():void {
    let newWidth = 600 + this.slides.length + 1;
    this.slides.push({
      image: './img/ds.jpg',
      text: 'Dark Souls 3'
    },
    {
      image: './img/analisis.png',
      text: 'Carlos marica'
    });
  }

  public removeSlide(index:number):void {
    this.slides.splice(index, 1);
  }
}
