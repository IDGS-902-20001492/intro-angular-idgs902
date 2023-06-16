import { Component } from '@angular/core';
import { IAlumnosIric } from '../alumnos-iric';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

  imageWidth:number = 50;
  imageMargin:number = 2;
  muestraImagenes:boolean = true;
  listFilter:string = 'sss';

  showImage():void{
    this.muestraImagenes = !this.muestraImagenes;
  }


  alumnosIric:IAlumnosIric[] = [

    {
      matricula:1234,
      nombre : "Pedro",
      edad : 23,
      correo : "pedro@gmail.com",
      foto: "https://img.freepik.com/premium-photo/handsome-confident-blond-bearded-businessman-with-hands-pockets-smiling-joyfully-give-professional-vibe-discussing-business-double-his-income-become-successful-white-background_1258-5820.jpg"
    },
    {
    matricula:1234,
    nombre : "Diana",
    edad : 28,
    correo : "diana@gmail.com",
    foto: "data:image/jpeg;base64,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"
    },
    //Bulding property
    {
    matricula:4321,
    nombre : "Mario",
    edad : 22,
    correo : "mario@gmail.com",
    foto: "https://www.shutterstock.com/image-photo/handsome-cheerful-african-american-executive-260nw-564197512.jpg"
    },
    {
    matricula:5555,
    nombre : "Juan",
    edad : 23,
    correo : "pedro@gmail.com",
    foto : "https://static.vecteezy.com/system/resources/previews/001/921/566/original/businessman-elegant-with-infographic-presentation-free-vector.jpg"
  },

  ];

}
