import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AchievementsTabComponent } from './achievements-tab.component';

describe('AchievementsTabComponent', () => {
  let component: AchievementsTabComponent;
  let fixture: ComponentFixture<AchievementsTabComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
