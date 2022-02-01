import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { BlogPost, blogPostConverter } from '@app/blog/blog_post';

import { environment } from '@environments/environment';

import { Query, Firestore, getFirestore, startAfter, increment, updateDoc, query, collection, limit, where, getDocs, doc } from 'firebase/firestore';

@Injectable()
export class BlogService {

  private _blogs = new BehaviorSubject<BlogPost[]>([]);
  private lastBlogDocument: any = null;
  private _isLastBlog = false;

  private db: Firestore;
  private blogQuery: Query<BlogPost>;

  constructor() {
    this.db = getFirestore();
    this.blogQuery = query(collection(this.db, 'blog'), limit(environment.blogCountPerFetch)).withConverter(blogPostConverter);
  }

  // complete
  getBlogList(firstFetch: boolean): Promise<void>
  {
    if (firstFetch && this._blogs.value.length)
    {
      return Promise.resolve();
    }
    if (!this._isLastBlog)
    {
      if (this.lastBlogDocument)
      {
        this.blogQuery = query(this.blogQuery, startAfter(this.lastBlogDocument));
      }
      return getDocs(this.blogQuery).then((blogList) => {
        this._isLastBlog = (blogList.size !== environment.blogCountPerFetch);
        if (!blogList.empty)
        {
          this.lastBlogDocument = blogList.docs[blogList.size - 1];
        }
        blogList.forEach(blog => {
          this.appendNewBlogs = blog.data() as BlogPost;
        });
      }, (error) => Promise.reject(error));
    }
    return Promise.resolve();
  }

  private set appendNewBlogs(blog: BlogPost)
  {
    this._blogs.next(this._blogs.getValue().concat([blog]));
  }

  get isLastBlog(): boolean
  {
    return this._isLastBlog;
  }

  get blogs(): BlogPost[]
  {
    return this._blogs.value;
  }

  // complete
  getOneBlog(blogTitle: string): BlogPost | undefined {
    return this._blogs.value.find(value => (value.title === blogTitle));
  }

  // complete
  fetchOneBlog(blogTitle: string): Promise<any> {
    const q = query(collection(this.db, 'blog'), where('title', '==', blogTitle), limit(1)).withConverter(blogPostConverter);
    return getDocs(q);
  }

  likeOneBlog(blogId: string): Promise<void>
  {
    const q = doc(this.db, 'blog', blogId);
    return updateDoc(q, {
      likes: increment(1)
    });
  }

}
