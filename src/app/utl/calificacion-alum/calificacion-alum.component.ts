import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calificacion-alum',
  templateUrl: './calificacion-alum.component.html',
  styleUrls: ['./calificacion-alum.component.css']
})
export class CalificacionAlumComponent {

  @Input()  califica!:number;
  @Output() calificaClick:EventEmitter<string> = new EventEmitter<string>();
  puntosCal!:number;

  ngOnChanges():void{
    this.puntosCal = this.califica*76/10;
  }

  onClick():void{
    this.calificaClick.emit(`${this.califica}`);
  }
}
