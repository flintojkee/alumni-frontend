import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniGroupmatesComponent } from './alumni-groupmates.component';

describe('AlumniGroupmatesComponent', () => {
  let component: AlumniGroupmatesComponent;
  let fixture: ComponentFixture<AlumniGroupmatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniGroupmatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniGroupmatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
