import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { AgregarPersonajesComponent } from './components/agregar-personajes/agregar-personajes.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    ListaPersonajesComponent,
    AgregarPersonajesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
  ,
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
