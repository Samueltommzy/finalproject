import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryHeadlineComponent } from './country-headline.component';

describe('CountryHeadlineComponent', () => {
  let component: CountryHeadlineComponent;
  let fixture: ComponentFixture<CountryHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
