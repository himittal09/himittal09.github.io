import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
