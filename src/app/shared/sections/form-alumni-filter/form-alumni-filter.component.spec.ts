import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlumniFilterComponent } from './form-alumni-filter.component';

describe('FormAlumniFilterComponent', () => {
  let component: FormAlumniFilterComponent;
  let fixture: ComponentFixture<FormAlumniFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAlumniFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAlumniFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
