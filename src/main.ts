// import './polyfills.ts';
import {bootstrap} from '@angular/platform-browser-dynamic';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
// import { environment } from './environments/environment';
import { AppComponent, environment } from 'app/app.routes';
// import { AppModule } from './app/app.module';
import { LoggingService } from './app/logging.service';
import { HTTP_PROVIDERS} from '@angular/http';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, [LoggingService]);
