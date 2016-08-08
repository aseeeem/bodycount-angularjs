// Imports component decarator
import {Component} from '@angular/core';
import {CountLoadComponent} from './count-load.component';

@Component({
  selector: 'bodycount-app',
  templateUrl: 'app/app.component.html',
  directives: []
})
export class AppComponent {
  title = 'This is BodyCount';
  tagline = 'Here, we count bodies.';

}
/* Define buildings here, pass it to AppComponent */
