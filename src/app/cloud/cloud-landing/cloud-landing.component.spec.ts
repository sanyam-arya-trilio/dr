import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudLandingComponent } from './cloud-landing.component';

describe('CloudLandingComponent', () => {
  let component: CloudLandingComponent;
  let fixture: ComponentFixture<CloudLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
