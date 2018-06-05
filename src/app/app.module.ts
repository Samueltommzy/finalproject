import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule , Http } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { SourcesListComponent } from './sources-list/sources-list.component';
import { FooterComponent } from './footer/footer.component';
import { SourceHeadlineComponent } from './source-headline/source-headline.component';
import { CountryHeadlineComponent } from './country-headline/country-headline.component';
import { SpinnerComponent } from './spinner/spinner.component';

import { NewsApiService } from './news-api.service';
import { UIRouterModule } from '@uirouter/angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UIView } from '@uirouter/angular';
import { StateService, Transition } from "@uirouter/angular";
import { RouterModule } from  './router.module';
import { Location } from'@angular/common';

import { CheckForUpdateService } from './check-for-update.service';
import { LogUpdateService } from './log-update.service';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpModule } from '@ngx-loading-bar/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    SourcesListComponent, 
    FooterComponent,
    SourceHeadlineComponent, 
    CountryHeadlineComponent,
    SpinnerComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    LoadingBarModule,
    LoadingBarHttpClientModule,
    LoadingBarHttpModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  providers: [
     CheckForUpdateService,
     LogUpdateService,
     NewsApiService,
     Location
  ],
  bootstrap: [UIView]
})
export class AppModule { }
