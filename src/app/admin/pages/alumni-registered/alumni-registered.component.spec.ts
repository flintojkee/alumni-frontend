import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniRegisteredComponent } from './alumni-registered.component';

describe('AlumniRegisteredComponent', () => {
  let component: AlumniRegisteredComponent;
  let fixture: ComponentFixture<AlumniRegisteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniRegisteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
