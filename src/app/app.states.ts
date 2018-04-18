"use strict";

import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component'
import { NewsComponent } from './news/news.component';
import { SourcesListComponent } from './sources-list/sources-list.component';
import { SourceHeadlineComponent } from './source-headline/source-headline.component';
import { CountryHeadlineComponent } from './country-headline/country-headline.component'

import { UIRouterModule } from '@uirouter/angular';
import { NewsApiService } from './news-api.service';
import { StateService, Transition } from "@uirouter/angular";
import { AppComponent } from './app.component';

export function newsService (newsApi: NewsApiService): any {
    return newsApi.getNews().then(data => {
        if (!data) return false; 

        return data.articles;
    });
}

export function sourcelistService(newsApi: NewsApiService): any {
    return newsApi.getAllSources().then(data => {
        if (!data) return false;
        
        return data.sources;
    });
}

export function countryHeadline(newsApi: NewsApiService, trans: Transition): any {
    return newsApi.getByCountry(trans.params().country).then(data=>{
        if (!data) return false;

        return data.articles;
    })
}

export function sourceHeadline(newsApi: NewsApiService, trans: Transition): any {
    let id = trans.params().id;
    return newsApi.resourceTopHeadlines(id).then(data=>{
        
        if (!data) return false;

        return data.articles;
    });
}

export const AppRoute = {
    name: 'app',
    redirectTo: 'news',
    component: AppComponent
}

export const newsRoute = {
    parent: 'app',
    name : "news",
    url: '/news',
    component: NewsComponent,
    resolve: [
        {
            token: 'news',
            deps:[ NewsApiService ],
            resolveFn: newsService
        }
    ]
}

export const sourceListRoute = {
    parent:'app',
    name : "sourceList",
    url: '/sourceList',
    component:SourcesListComponent,
    resolve:[
        {
            token : 'sourceList',
            deps: [NewsApiService],
            resolveFn:sourcelistService
        }
    ]
}

export const countryRoute = {
    name : 'app.country',
    url: '/:country/topheadlines',
    component:CountryHeadlineComponent,
    resolve :[
        {
            token: 'country',
            deps:[NewsApiService, Transition],
            resolveFn :countryHeadline
        }
    ]
}

export const sourceHeadlineRoute = {
    name: 'app.sourceheadline',
    url: '/sourceList/:id',
    component:SourceHeadlineComponent,
    resolve:[
        {
            token: "headline",
            deps: [NewsApiService,Transition],
            resolveFn: sourceHeadline
        }
    ]
}

export const APP_STATES = [AppRoute,sourceListRoute,newsRoute,countryRoute,sourceHeadlineRoute];