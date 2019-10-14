import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudAddDialogComponent } from './cloud-add-dialog.component';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('CloudAddDialogComponent', () => {
  let component: CloudAddDialogComponent;
  let fixture: ComponentFixture<CloudAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CloudAddDialogComponent],
      imports: [
        BrowserAnimationsModule,
        AppMaterialModule,
        FormsModule,
        HttpClientModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
