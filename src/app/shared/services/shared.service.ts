import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { getFirestore, Firestore } from 'firebase/firestore';

import { environment } from '@environments/environment';

export interface ContactQuery {
  email: string;
  name: string;
  query: string;
  subject: string;
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private db: Firestore;

  constructor(private http: HttpClient) {
    this.db = getFirestore();
  }

  // complete
  getResumeLink (fileName: string): string {
    const encoded = encodeURI(fileName);
    const fileURL = 'https://firebasestorage.googleapis.com/v0/b/portfolio-60c77.appspot.com/o/Resumes%2F' + encoded + '.pdf?alt=media';
    return fileURL;
  }

  // complete
  async submitQuery (query: ContactQuery): Promise<any> {
    try {
      await this.http.post(environment.contactEmailLink, {
        name: query.name,
        email: query.email,
        query: query.query,
        subject: query.subject
      }).toPromise();
    } catch (error) {
      return error;
    }
  }

}
