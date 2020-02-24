import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniUnregisteredComponent } from './alumni-unregistered.component';

describe('AlumniUnregisteredComponent', () => {
  let component: AlumniUnregisteredComponent;
  let fixture: ComponentFixture<AlumniUnregisteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniUnregisteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniUnregisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
