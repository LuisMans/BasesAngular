import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/Persona.interface';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {



  public personajes: Personaje[] = [{
    id: uuid(),
    nombre: 'Goku',
    poder: 15000
  }, {
    id: uuid(),
    nombre: 'Vegeta',
    poder: 7500
  },
  {
  id: uuid(),
  nombre: 'Trunks',
  poder: 8000
  }
  ];

  public poder: number = 0;

  nuevoPersonaje(personaje: Personaje): void {
   const nuevoPersonaje: Personaje = {
    id: uuid(), ...personaje
   };
   this.personajes.push(nuevoPersonaje);
  }

  personajeEliminado(eliminado: number): void {
    this.personajes.splice(eliminado, 1);
  }

  personajeEliminadoPorId(id: string) {
    this.personajes = this.personajes.filter(personaje => personaje.id !== id);
  console.log("Personaje eliminado", this.personajes);

  }


}
