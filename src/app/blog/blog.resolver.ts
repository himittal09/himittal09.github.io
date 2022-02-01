import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { BlogPost } from '@app/blog/blog_post';
import { BlogService } from './blog.service';

@Injectable()
export class BlogResolver implements Resolve<BlogPost| null> {

  constructor(private service: BlogService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<BlogPost | null> | Promise<BlogPost | null> | BlogPost | null {
    const url = route.url[0].toString();
    const decoded = decodeURI(url);
    const blog = this.service.getOneBlog(decoded);
    if (blog)
    {
      return blog;
    }
    return this.service.fetchOneBlog(decoded).then((data) => {
      if (data.empty)
      {
        return Promise.resolve(null);
      }
      return Promise.resolve(data.docs[0].data() as BlogPost);
    }).catch((error) => {
      return Promise.reject(error);
    });
  }
}
