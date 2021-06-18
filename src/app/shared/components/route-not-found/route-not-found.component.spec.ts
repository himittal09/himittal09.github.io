import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RouteNotFoundComponent } from './route-not-found.component';

describe('RouteNotFoundComponent', () => {
  let component: RouteNotFoundComponent;
  let fixture: ComponentFixture<RouteNotFoundComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
