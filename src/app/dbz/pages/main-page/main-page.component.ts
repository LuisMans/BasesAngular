import { Component } from '@angular/core';
import { DbzService } from '../../services/dbz.service';
import { Personaje } from '../../interfaces/Persona.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor(private dbzService: DbzService) {

  }

  get personajes(): Personaje[] {
    return [...this.dbzService.personajes];
  }

  onDeletePersonaje(id: string): void {
    this.dbzService.personajeEliminadoPorId(id);
  }

  onNewPersonaje(personaje: Personaje): void{
    this.dbzService.nuevoPersonaje(personaje);
  }


}
