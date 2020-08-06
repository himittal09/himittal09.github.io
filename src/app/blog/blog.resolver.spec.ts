import { TestBed } from '@angular/core/testing';

import { BlogResolver } from './blog.resolver';

describe('BlogResolver', () => {
  let service: BlogResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
