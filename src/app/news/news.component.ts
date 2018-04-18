import { Component, OnInit, Input } from '@angular/core';
import { NewsApiService } from '../news-api.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
selector: 'app-news',
templateUrl: './news.component.html',
styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {
@Input() news: Array<object>;
showSpinner : any;
constructor(private apiService : NewsApiService) { }

ngOnInit() { 
    this.showSpinner = true;
    if(this.news){
        this.showSpinner = false
    }
 }

}
