import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) {}

  getResume (fileName: string): void {
    this.http.get('gs://portfolio-60c77.appspot.com/Resumes/' + fileName).subscribe({
    next: (what) => console.log(what),
    error: (error) => console.error(error),
    complete: () => console.log('Completed')
    });
  }

  toggleTheme () {
    let cl: DOMTokenList = document.body.classList;
    if (window.localStorage.getItem('colorTheme') == 'day')
    {
      cl.add('my-dark-theme');
      cl.remove('my-theme');
      window.localStorage.setItem('colorTheme', 'night');
    }
    else
    {
      cl.add('my-theme');
      cl.remove('my-dark-theme');
      window.localStorage.setItem('colorTheme', 'day');
    }
  }
}
