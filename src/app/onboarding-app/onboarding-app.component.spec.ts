import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingAppComponent } from './onboarding-app.component';

describe('OnboardingAppComponent', () => {
  let component: OnboardingAppComponent;
  let fixture: ComponentFixture<OnboardingAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
