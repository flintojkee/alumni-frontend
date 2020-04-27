import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdpateProfileCardComponent } from './udpate-profile-card.component';

describe('UdpateProfileCardComponent', () => {
  let component: UdpateProfileCardComponent;
  let fixture: ComponentFixture<UdpateProfileCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdpateProfileCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdpateProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
