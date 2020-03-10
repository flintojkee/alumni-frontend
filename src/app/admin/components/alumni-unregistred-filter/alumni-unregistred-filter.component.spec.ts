import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniUnregistredFilterComponent } from './alumni-unregistred-filter.component';

describe('AlumniUnregistredFilterComponent', () => {
  let component: AlumniUnregistredFilterComponent;
  let fixture: ComponentFixture<AlumniUnregistredFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniUnregistredFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniUnregistredFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
