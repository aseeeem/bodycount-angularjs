// Imports component decarator
import {Component} from '@angular/core';

@Component({
  selector: 'bodycount-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  title = 'This is BodyCount';
  tagline = 'Here, we count bodies.'
}

export class Building {
  id: number;
  rooms: number[];
  name: string;
}
