import { Component } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {
   num1: string = '';
   num2: string = '';
   res: number = 0;
   sumar():void{
    this.res = parseInt(this.num1) + parseInt(this.num2);
   }
   restar():void{
    this.res = parseInt(this.num1) - parseInt(this.num2);
   }
   multiplicar():void{
    this.res = parseInt(this.num1) * parseInt(this.num2);
   }
   dividir():void{
    this.res = parseInt(this.num1) / parseInt(this.num2);
   }
}
