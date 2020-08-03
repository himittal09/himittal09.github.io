import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ContactQuery } from '@app/shared/classes/query';

// use these files till for development
// import { firestore, storage } from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/storage';

// use this line to build for production
declare var firebase: any;

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // db: firestore.Firestore;
  // storage: storage.Storage;

  db: any;
  storage: any;

  constructor(private http: HttpClient) {
    this.db = firebase.firestore();
    this.storage = firebase.storage();
    this.db.enablePersistence().then(() => {}, () => {});
  }

  getResumeLink (fileName: string): Promise<any> {
    return this.storage.refFromURL(`gs://portfolio-60c77.appspot.com/Resumes/${fileName}.pdf`).getDownloadURL();
  }

  getResume (fileName: string): Promise<Blob> {
    let encoded = encodeURI(fileName);
    let fileURL = 'https://firebasestorage.googleapis.com/v0/b/portfolio-60c77.appspot.com/o/Resumes%2FResume' + encoded + '.pdf?alt=media';
    return this.http.get(fileURL, {
      responseType: 'blob'
    }).toPromise();
    // return this.getResumeLink(fileName).then((fileURL: string) => {
    // });
  }

  submitQuery (query: ContactQuery): Promise<any> {
    return this.db.collection("queries").add(query);
  }

  getProjectList (): Promise<any> {
    return this.db.collection('project').where('toShow', '==', true).get();
  }

  getAchievementList (): Promise<any> {
    return this.db.collection('achievements').get();
  }

  get isDayTheme (): boolean {
    let cl: DOMTokenList = document.body.classList;
    return !cl.contains('my-dark-theme');
  }

  toggleTheme () {
    let cl: DOMTokenList = document.body.classList;
    if (this.isDayTheme)
    {
      cl.add('my-dark-theme');
      cl.remove('my-theme');
    }
    else
    {
      cl.add('my-theme');
      cl.remove('my-dark-theme');
    }
  }
}
