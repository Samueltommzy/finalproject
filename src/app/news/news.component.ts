import { Component, OnInit, Input } from '@angular/core';
import { NewsApiService } from '../news-api.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
selector: 'app-news',
templateUrl: './news.component.html',
styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {
@Input() news: Array<object>;

constructor(private apiService : NewsApiService) { }

ngOnInit() {  }

}
