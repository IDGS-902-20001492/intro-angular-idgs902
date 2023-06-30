import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {
  alumnosForm!:FormGroup;

  alumnos:any = new Array([]);

  mat!:string;
  nom!:string;
  edad!:number;
  correo!:string;
  foto!:string;
  calif!:number;


  constructor(private readonly fb:FormBuilder) {
    this.alumnosForm = this.initForm();
  }

  onSubmit():void{
    //console.log('Form: '+this.alumnosForm.value);
    this.obtenerValor();
  }

  obtenerValor():void{
    this.mat = this.alumnosForm.get('matricula')?.value;
    this.nom = this.alumnosForm.get('nombre')?.value;
    this.edad = this.alumnosForm.get('edad')?.value;
    this.correo = this.alumnosForm.get('correo')?.value;
    this.foto = this.alumnosForm.get('foto')?.value;
    this.calif = this.alumnosForm.get('calif')?.value;

  }

    getAlumnos():void{
      Object.keys(this.alumnosForm.controls).forEach(key => {
        const control = this.alumnosForm.get(key);
        this.alumnos.push(control);
      });
    }

  initForm():FormGroup{
    return this.fb.group({
      matricula:['',[Validators.required, Validators.minLength(3)]],
      nombre:['', [Validators.required]],
      edad:[''],
      correo:['', [Validators.required, Validators.email]],
      foto:[''],
      calif:['']
    });

  }
}
