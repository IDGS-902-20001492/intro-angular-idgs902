import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NamesGrupos } from './utl/grupos.component';
import { IdgsComponent } from './utl/idgs/idgs.component';
import { Alumno } from './utl/alumnosIDGS902.component';

@NgModule({
  declarations: [
    AppComponent,
    NamesGrupos,
    Alumno,
    IdgsComponent    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
