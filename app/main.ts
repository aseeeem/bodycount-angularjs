import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from '@angular/http';
// calls bootstrap
bootstrap(AppComponent,[HTTP_PROVIDERS]);
