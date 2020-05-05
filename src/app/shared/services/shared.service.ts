import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ContactQuery } from '@app/shared/classes/query';

import * as firebase from 'firebase';

import 'firebase/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  db: firebase.firestore.Firestore = firebase.firestore();
  storage: firebase.storage.Storage = firebase.storage();

  constructor(private http: HttpClient) {}

  getResumeLink (fileName: string): Promise<any> {
    return this.storage.refFromURL(`gs://portfolio-60c77.appspot.com/Resumes/${fileName}.pdf`).getDownloadURL();
  }

  getResume (fileName: string): Promise<Blob> {
    return this.getResumeLink(fileName).then((fileURL: string) => {
      console.log('Resume link: ', fileURL)
      return this.http.get(fileURL, {
        responseType: 'blob'
      }).toPromise();
    });
  }

  submitQuery (query: ContactQuery): Promise<firebase.firestore.DocumentReference<firebase.firestore.DocumentData>> {
    return this.db.collection("queries").add(query);
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
