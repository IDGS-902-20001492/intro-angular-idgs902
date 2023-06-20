import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NamesGrupos } from './utl/grupos.component';
import { IdgsComponent } from './utl/idgs/idgs.component';
import { Alumno } from './utl/alumnosIDGS902.component';
import { IricComponent } from './utl/iric/iric.component';
import { MenuComponent } from './utl/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SumaComponent } from './utl/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './utl/formularios/operas/operas.module';
import { DistModule } from './distancia/dist/dist.module';

@NgModule({
  declarations: [
    AppComponent,
    NamesGrupos,
    Alumno,
    IdgsComponent,
    IricComponent,
    MenuComponent,
    SumaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule,
    DistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
