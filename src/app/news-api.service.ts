import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http,Response } from '@angular/http' ;
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { _throw } from 'rxjs/observable/throw';

@Injectable()
export class NewsApiService {
baseUrl : string
Apikey:string

constructor( private http: Http) {
this.baseUrl = "https://newsapi.org/v2";
this.Apikey = "448f3d2e8ba049bebbad9a5dac36d035";
}

getNews(): any {
  return this.http.get(`${ this.baseUrl }/top-headlines?category=entertainment&apiKey=${ this.Apikey }`).map(this.parseData).toPromise().then(response => {
    return response;
  }).catch(this.handleError);
};
 
getByCountry(countryname:string): any{
 return this.http.get(`${this.baseUrl}/top-headlines?country=${countryname}&apiKey=448f3d2e8ba049bebbad9a5dac36d035`)
  .map(this.parseData).toPromise().then( response =>{
   return response;
  }).catch(this.handleError);
};

getAllSources(): any{
  return this.http.get(`${this.baseUrl}/sources?apikey=448f3d2e8ba049bebbad9a5dac36d035`)
  .map(this.parseData).toPromise().then(response=>{
    return response;
  }).catch(this.handleError);
}

resourceTopHeadlines(sourceid:string): any{
  return this.http.get(`${this.baseUrl}/top-headlines?sources=${sourceid}&apiKey=${this.Apikey}`).map(this.parseData).toPromise()
  .then(response =>{
    return response
  }).catch(this.handleError);
}
private parseData(res: Response) {
  let data = res.json();
    return data;
}
private handleError(error: Response | any) {
  let errorMessage: string;
  errorMessage = error.message ? error.message : error.toString();
  return Observable.throw(errorMessage);
}
  }

