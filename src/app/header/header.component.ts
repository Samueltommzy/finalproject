import { Component, OnInit,Input, Output } from '@angular/core';
import { StateService } from '@uirouter/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
@Input() searchboxValue;
  constructor(public stateService: StateService) {   }

ngOnInit() {}

onentered(): void{
  this.searchboxValue = this.searchboxValue;
  this.stateService.go('app.country', { country: this.searchboxValue }, { reload: true });
};

myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += "responsive";
  } else {
      x.className = "topnav";
  };
};
};
