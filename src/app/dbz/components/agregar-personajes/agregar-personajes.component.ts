import { Component, EventEmitter, Output, output } from '@angular/core';
import { Personaje } from '../../interfaces/Persona.interface';

@Component({
  selector: 'dbz-agregar-personajes',
  templateUrl: './agregar-personajes.component.html',
  styleUrl: './agregar-personajes.component.css'
})
export class AgregarPersonajesComponent {

@Output()
personajeEmit: EventEmitter<Personaje> = new EventEmitter();

public personaje: Personaje = {
  nombre: '',
  poder: 0

};

emitirPersonaje(){
  if(this.personaje.nombre.length === 0) return;

  this.personajeEmit.emit(this.personaje);
  console.log(this.personaje);
  this.personaje = {
    nombre: '',
    poder: 0
  };
  console.log(this.personaje);


}

}


