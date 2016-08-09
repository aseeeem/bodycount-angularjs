// Imports component decarator
import {Component} from '@angular/core';
import {Response, Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'bodycount-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  public welcome = "Welcome to our population tracker!";
  public title = "Here's how many people we've seen";
  public footer_details = "Wentworth 2016";
  constructor(private _http: Http) {  }
  counts = Observable.interval(2000)
  .switchMap(() => this._http.get("app/countJSONdata.json"))
  .map((res: Response) => res.json().count);
}
