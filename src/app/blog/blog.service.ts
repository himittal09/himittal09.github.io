import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { blogPost, blogPostConverter } from '@app/blog/blog_post';

import { environment } from '@environments/environment';

import { DocumentData, Query, Firestore, getFirestore, startAfter, increment, FieldValue, updateDoc, query, collection, limit, where, getDocs, getDoc, doc } from 'firebase/firestore';

@Injectable()
export class BlogService {

  private _blogs = new BehaviorSubject<blogPost[]>([]);
  private lastBlogDocument: any = null;
  private _isLastBlog: boolean = false;
  
  private db: Firestore;
  private blogQuery: Query<blogPost>;

  constructor() {
    this.db = getFirestore();
    this.blogQuery = query(collection(this.db, 'blog'), limit(environment.blogCountPerFetch)).withConverter(blogPostConverter);
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
        this.blogQuery = query(this.blogQuery, startAfter(this.lastBlogDocument));
      }
      return getDocs(this.blogQuery).then((blogList) => {
        this._isLastBlog = (blogList.size !== environment.blogCountPerFetch);
        if (!blogList.empty)
        {
          this.lastBlogDocument = blogList.docs[blogList.size-1];
        }
        blogList.forEach(blog => {
          this.appendNewBlogs = <blogPost>blog.data();
        });
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
  getOneBlog (blogTitle: string): blogPost | undefined {
    return this._blogs.value.find(value => (value.title === blogTitle));
  }

  // complete
  fetchOneBlog (blogTitle: string): Promise<any> {
    const q = query(collection(this.db, 'blog'), where('title', '==', blogTitle), limit(1)).withConverter(blogPostConverter);
    return getDocs(q);
  }

  likeOneBlog (blogId: string): Promise<void>
  {
    const q = doc(this.db, 'blog', blogId);    
    return updateDoc(q, {
      likes: increment(1)
    })
  }

}