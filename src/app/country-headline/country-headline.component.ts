import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsApiService } from '../news-api.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-country-headline',
  templateUrl: './country-headline.component.html',
  styleUrls: ['./country-headline.component.scss']
})
export class CountryHeadlineComponent implements OnInit {
 @Input() country:Array<object>; 
 @Input() searchboxVal : string;
  constructor( ) {
  
   }

  ngOnInit() {
  }
}
