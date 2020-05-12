import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniUpdateRequestComponent } from './alumni-update-request.component';

describe('AlumniUpdateRequestComponent', () => {
  let component: AlumniUpdateRequestComponent;
  let fixture: ComponentFixture<AlumniUpdateRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniUpdateRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniUpdateRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
