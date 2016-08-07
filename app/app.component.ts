// Imports component decarator
import {Component} from '@angular/core';
import {Building} from './building';
import {BuildingDetailComponent} from './building-details.component';

@Component({
  selector: 'bodycount-app',
  templateUrl: 'app/app.component.html',
  directives: [BuildingDetailComponent]
})
export class AppComponent {
  title = 'This is BodyCount';
  tagline = 'Here, we count bodies.';
  buildings = BUILDINGS;
  selectedBuilding: Building;
  onSelect(building: Building) {
    this.selectedBuilding = building;
  }

}
/* Define buildings here, pass it to AppComponent */
const BUILDINGS: Building[] = [
  {id: 1, rooms: [1, 2], name: "Dobbs"},
  {id: 2, rooms: [1], name: "Waston Hall"}
];
