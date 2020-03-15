import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAlumniComponent } from './filter-alumni.component';

describe('FilterAlumniComponent', () => {
  let component: FilterAlumniComponent;
  let fixture: ComponentFixture<FilterAlumniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterAlumniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
