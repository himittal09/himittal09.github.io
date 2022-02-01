import { Timestamp } from 'firebase/firestore';

export class BlogPost {
  likes: number;
  date: Date;
  title: string;
  body: string;
  docID?: string;

  constructor(likes: number, title: string, body: string, date: Date, docID?: string) {
    this.body = body;
    this.likes = likes;
    this.title = title;
    this.date = date;
    this.docID = docID;
  }
}

export const blogPostConverter = {
  fromFirestore(
    snapshot: any,
    options: any
  ): BlogPost {
    const blog = snapshot.data();
    blog.docID = snapshot.id;
    return new BlogPost(blog.likes, blog.title, blog.body, blog.date.toDate(), blog.docID);
  },
  toFirestore(blog: BlogPost): any {
    return {
      likes: blog.likes,
      date: Timestamp.fromDate(blog.date),
      title: blog.title,
      body: blog.body
    };
  }
};
