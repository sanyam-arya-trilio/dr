import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudLandingComponent } from './cloud-landing.component';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CloudLandingComponent', () => {
  let component: CloudLandingComponent;
  let fixture: ComponentFixture<CloudLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CloudLandingComponent],
      imports: [
        BrowserAnimationsModule,
        AppMaterialModule,
        FormsModule,
        HttpClientModule
      ]
    }).compileComponents();
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
