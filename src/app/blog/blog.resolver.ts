import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { blogPost } from '@app/blog/blog_post';
import { BlogService } from './blog.service';

@Injectable()
export class BlogResolver implements Resolve<blogPost> {

  constructor(private service: BlogService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<blogPost> | Promise<blogPost> | blogPost {
    let url = route.url[0].toString();
    let decoded = decodeURI(url);
    let blog = this.service.getOneBlog(decoded);
    if (blog)
    {
      return blog;
    }
    return this.service.fetchOneBlog(decoded).then((data) => {
      if (data.empty)
      {
        return Promise.resolve(null);
      }
      return Promise.resolve(<blogPost>data.docs[0].data());
    }).catch((error) => {
      return Promise.reject(error);
    });
  }
}
