import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProjectsTabComponent } from './projects-tab.component';

describe('ProjectsTabComponent', () => {
  let component: ProjectsTabComponent;
  let fixture: ComponentFixture<ProjectsTabComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
