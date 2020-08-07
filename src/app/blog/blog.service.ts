import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { blogPost, blogPostConverter } from '@app/blog/blog_post';

import { environment } from '@environments/environment';

// use these files till for development
// import * as firebase from 'firebase/app';
// import 'firebase/firestore';

// use this line to build for production
declare var firebase: any;

@Injectable()
export class BlogService {

  private _blogs = new BehaviorSubject<blogPost[]>([]);
  private lastBlogDocument: any = null;
  private _isLastBlog: boolean = false;
  
  // private db: firebase.firestore.Firestore;
  // private blogQuery: firebase.firestore.Query<firebase.firestore.DocumentData>;

  private db: any;
  private blogQuery: any;

  constructor() {
    this.db = firebase.firestore();
    this.blogQuery = this.db.collection('blog').withConverter(blogPostConverter).limit(environment.blogCountPerFetch);
  }

  // complete
  getBlogList (firstFetch: boolean): Promise<void>
  {
    if (firstFetch && this._blogs.value.length)
    {
      return Promise.resolve();
    }
    if (!this._isLastBlog)
    {
      if (this.lastBlogDocument)
      {
        this.blogQuery = this.blogQuery.startAfter(this.lastBlogDocument);
      }
      return this.blogQuery.get().then((blogList) => {
        this._isLastBlog = (blogList.size !== environment.blogCountPerFetch);
        if (!blogList.empty)
        {
          this.lastBlogDocument = blogList.docs[blogList.size-1];
        }
        blogList.forEach(blog => {
          this.appendNewBlogs = <blogPost>blog.data();
        });
        return Promise.resolve();
      }, (error) => Promise.reject(error));
    }
    return Promise.resolve();
  }

  private set appendNewBlogs (blog: blogPost)
  {
    this._blogs.next(this._blogs.getValue().concat([blog]));
  }

  get isLastBlog (): boolean
  {
    return this._isLastBlog;
  }

  get blogs (): blogPost[]
  {
    return this._blogs.value;
  }

  // complete
  getOneBlog (blogTitle: string): blogPost {
    return this._blogs.value.find(value => (value.title === blogTitle));
  }

  // complete
  fetchOneBlog (blogTitle: string): Promise<any> {
    return this.db.collection('blog').withConverter(blogPostConverter).where('title', '==', blogTitle).limit(1).get();
  }

  likeOneBlog (blogId: string): Promise<void>
  {
    return this.db.collection('blog').doc(blogId).update({
      likes: firebase.firestore.FieldValue.increment(1)
    });
  }

}