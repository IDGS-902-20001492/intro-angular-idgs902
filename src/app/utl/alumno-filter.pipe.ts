import { Pipe, PipeTransform } from '@angular/core';
import { IAlumnosIric } from './alumnos-iric';

@Pipe({
  name: 'alumnoFilter'
})
export class AlumnoFilterPipe implements PipeTransform {

  transform(value: IAlumnosIric[], args:string): IAlumnosIric[] {
    let filter:string=args ?args.toLocaleLowerCase():'';

    return filter ? value.filter((alumno:IAlumnosIric)=>
    alumno.nombre.toLocaleLowerCase().indexOf(filter)!==-1):
    value;
  }

}
