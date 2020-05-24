import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupmatesListComponent } from './groupmates-list.component';

describe('GroupmatesListComponent', () => {
  let component: GroupmatesListComponent;
  let fixture: ComponentFixture<GroupmatesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupmatesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupmatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
