// Imports component decarator
import {Component} from '@angular/core';
import {Building} from './building';
import {Http, Response} from '@angular/http';
@Component({
  selector: 'bodycount-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  title = 'This is BodyCount';
  tagline = 'Here, we count bodies.';
  buildings = BUILDINGS;
	public counts;
  selectedBuilding: Building;
  onSelect(building: Building) { this.selectedBuilding = building; }
	constructor(private http: Http) {}
}
/* Define buildings here, pass it to AppComponent */
const BUILDINGS: Building[] = [
  {id: 1, rooms: [1, 2], name: "Dobbs"},
  {id: 2, rooms: [1, 2], name: "Wentworth Hall"}
];



