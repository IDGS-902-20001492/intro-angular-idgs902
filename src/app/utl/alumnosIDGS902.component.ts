import { Component } from "@angular/core";
@Component({
    selector: 'app-alumnos',
    templateUrl: './IDGS902.component.html',
})

export class Alumno{
    alumno ={
        matricula: 20001492,
        nombre: 'Yahir',
        apaterno: 'Quiroz',
        edad: 20
    }
    constructor(){}
}