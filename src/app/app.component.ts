import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular-idgs902';

  alumno = {
    matricula: 1234,
    nombre: 'Mario',
    apaterno: 'Lopez',
    inscrito : '999.99',
    fechaNacimiento: new Date()    
  };

  duplicaN(n: number): number {
    return n * 2;
  }
}
