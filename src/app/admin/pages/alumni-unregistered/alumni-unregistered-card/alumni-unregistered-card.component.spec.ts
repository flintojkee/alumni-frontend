import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniUnregisteredCardComponent } from './alumni-unregistered-card.component';

describe('AlumniUnregisteredCardComponent', () => {
  let component: AlumniUnregisteredCardComponent;
  let fixture: ComponentFixture<AlumniUnregisteredCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniUnregisteredCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniUnregisteredCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
