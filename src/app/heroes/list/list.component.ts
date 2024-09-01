import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

public heroNames: string[] = ['Ironman', 'Spiderman', 'Thor','Hulk'];
public deletedHero?: string;

eliminar(): void {
  this.deletedHero = this.heroNames.pop();

}

}
