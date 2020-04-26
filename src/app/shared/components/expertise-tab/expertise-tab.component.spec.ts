import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseTabComponent } from './expertise-tab.component';

describe('ExpertiseTabComponent', () => {
  let component: ExpertiseTabComponent;
  let fixture: ComponentFixture<ExpertiseTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertiseTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertiseTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
