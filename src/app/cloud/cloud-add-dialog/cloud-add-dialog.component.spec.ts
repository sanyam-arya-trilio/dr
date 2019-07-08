import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudAddDialogComponent } from './cloud-add-dialog.component';

describe('CloudAddDialogComponent', () => {
  let component: CloudAddDialogComponent;
  let fixture: ComponentFixture<CloudAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudAddDialogComponent ]
    })
    .compileComponents();
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
