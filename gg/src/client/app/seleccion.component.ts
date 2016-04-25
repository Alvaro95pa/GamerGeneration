import { Component, Output, EventEmitter, Input, OnInit } from 'angular2/core';
import { BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'seleccion-component',
  templateUrl: 'app/seleccion.component.html',
  directives: [BUTTON_DIRECTIVES],
  styleUrls: [],
  providers: []
})

export class SeleccionComponent implements OnInit {
  //Variables
  estado: string;
  @Input()
  private inicial: boolean;
  @Output()
  private cambio = new EventEmitter<boolean>();
  //Metodos
  cambiar(){
      this.cambio.next(this.inicial);
	}
  ngOnInit() {
    if(this.inicial){
      this.estado = 'visible';
    }
    else{
      this.estado = 'noVisible'
    }
  }
}
