import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from'@angular/common';

import { NewsApiService } from '../../app/news-api.service';
import { StateService } from '@uirouter/angular';

@Component({
  selector: 'app-source-headline',
  templateUrl: './source-headline.component.html',
  styleUrls: ['./source-headline.component.scss']
})
export class SourceHeadlineComponent implements OnInit {
@Input() headline: Array<object>

  constructor(private location:Location,private state:StateService) { }

  ngOnInit() { }

  goBack(){
    this.location.back();
  }
}
