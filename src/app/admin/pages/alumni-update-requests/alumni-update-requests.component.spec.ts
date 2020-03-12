import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniUpdateRequestsComponent } from './alumni-update-requests.component';

describe('AlumniUpdateRequestsComponent', () => {
  let component: AlumniUpdateRequestsComponent;
  let fixture: ComponentFixture<AlumniUpdateRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniUpdateRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniUpdateRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
