import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { IricComponent } from "./utl/iric/iric.component";
import { AlumnoReactiveComponent } from "./formularios/alumno-reactive/alumno-reactive.component";

const routes:Routes = [
{path:'', redirectTo:'/Home', pathMatch:'full'},
{path:'AltaAlum', component: AlumnoReactiveComponent},
{path:'IRIC', component:IricComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}