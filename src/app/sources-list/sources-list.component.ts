import { Component, OnInit ,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { NewsApiService } from '../../app/news-api.service';


@Component({
  selector: 'app-sources-list',
  templateUrl: './sources-list.component.html',
  styleUrls: ['./sources-list.component.scss']
})
export class SourcesListComponent implements OnInit {
@Input() sourceList : Array<object>;

constructor() { }

  ngOnInit() { }
}
