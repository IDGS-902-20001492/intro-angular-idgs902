import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  b1!:string;
  b2!:string;
  b3!:string;
  b4!:string;
  //Creamos la lista con los colores de la resistencia de la banda 1 y 2
  colBanda12:string[] = ['Negro','Cafe','Rojo','Naranja','Amarillo','Verde',
                        'Azul','Violeta','Gris','Blanco'];
  //Creamos la lista con los colores de la resistencia de la banda 3 (multiplicador)
  colBanda3:string[] = ['Negro','Cafe','Rojo','Naranja','Amarillo','Verde',
                        'Azul','Violeta','Gris','Blanco','Dorado','Plateado'
                        //,'Sin banda'
                       ];
  //Lista para la banda 4
  colBanda4:string[] = ['Dorado','Plateado'];                                            

  min!:number;
  max!:number;
  resultado!:number;
 
  determinarValorRB1_B2(color: string): number {
  let valorR: number;

  if (color === 'Negro') {
    valorR = 0;
  } else if (color === 'Cafe') {
    valorR = 1;
  } else if (color === 'Rojo') {
    valorR = 2;
  } else if (color === 'Naranja') {
    valorR = 3;
  } else if (color === 'Amarillo') {
    valorR = 4;
  } else if (color === 'Verde') {
    valorR = 5;
  } else if (color === 'Azul') {
    valorR = 6;
  } else if (color === 'Violeta') {
    valorR = 7;
  } else if (color === 'Gris') {
    valorR = 8;
  } else if (color === 'Blanco') {
    valorR = 9;
  }else {
    valorR = -1;
  }

  return valorR;
  }
  determinarValorMul(color: string): number {
  let valorR: number;

  if (color === 'Negro') {
    valorR = 1;
  } else if (color === 'Cafe') {
    valorR = 10;
  } else if (color === 'Rojo') {
    valorR = 100;
  } else if (color === 'Naranja') {
    valorR = 1000;
  } else if (color === 'Amarillo') {
    valorR = 10000;
  } else if (color === 'Verde') {
    valorR = 100000;
  } else if (color === 'Azul') {
    valorR = 1000000;
  } else if (color === 'Violeta') {
    valorR = 10000000;
  } else if (color === 'Gris') {
    valorR = 100000000;
  } else if (color === 'Blanco') {
    valorR = 1000000000;
  } else if(color === 'Dorado'){
    valorR = 0.1;
  } else if(color === 'Plateado'){
    valorR = 0.01;
  } else if(color === 'Sin banda'){
    valorR = 0.2
  } else {
    valorR = 0.2;
  }

  return valorR;
  }

  determinarTolerancia(color:String):number{
    let valorT:number;

    if(color === 'Dorado'){
      valorT = 0.05;
    }else if(color === 'Plateado'){
      valorT = 0.1;
    }else{
      valorT = 0;
    }

    return valorT;
  }

 calcularResultado(){
  let vB1:string = this.determinarValorRB1_B2(this.b1).toString();
  let vB2:string = this.determinarValorRB1_B2(this.b2).toString();
  let vB3:number = this.determinarValorMul(this.b3);
  let vB4:number = this.determinarTolerancia(this.b4);

  let sumB1_B2:number = parseInt(vB1+vB2);

  this.min = (sumB1_B2*vB3)-((sumB1_B2*vB3)*vB4);
  this.max = (sumB1_B2*vB3)+((sumB1_B2*vB3)*vB4);
  this.resultado = (sumB1_B2)*vB3;
 }
}
