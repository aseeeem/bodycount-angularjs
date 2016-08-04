// Imports component decarator
import {Component} from '@angular/core';

@Component({
  selector: 'bodycount-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  title = 'This is BodyCount';
  tagline = 'Here, we count bodies.'
  public buildings = BUILDINGS;
}
/* Define buildings here, pass it to AppComponent */
const BUILDINGS: Building[] = [
  {id: 1, rooms: [1, 2], name: "Dobbs"},
  {id: 2, rooms: [1, 2], name: "Wentworth Hall"}
];

export class Building {
  id: number;
  rooms: number[];
  name: string;
}
