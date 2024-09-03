import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/Persona.interface';

@Component({
  selector: 'dbz-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrl: './lista-personajes.component.css'
})
export class ListaPersonajesComponent {

  @Output()
  public personajeEliminadoEmit: EventEmitter<string> = new EventEmitter();

  @Input()
  public listaPersonajes: Personaje[] = [{
    nombre: 'Trunks',
    poder: 1000
  }

  ];

  borrarPersonaje(id?: string) {
    console.log("Borrando personaje", id);

    if (!id) return;
      this.personajeEliminadoEmit.emit(id);

  }
}
