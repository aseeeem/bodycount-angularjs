/* 
app.component.ts 
for Asim Shamim's Senior Design Project
written for Angular2
*/
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
  /* 
  Async magic happens here
  Creates observable object 'counts'
  which refreshes at some interval (in our case 2 seconds)
  All of that is eventually mapped from a json file to counts
  */
  
  /* 
  The 'countJSONdata.json' file would be modified at some undefined interval
  For demonstration purposes, I set the interval to 2 seconds
  This file would be updated with the new count and time data
  */
  counts = Observable.interval(2000)
  .switchMap(() => this._http.get("app/countJSONdata.json"))
  .map((res: Response) => res.json().count);
}
