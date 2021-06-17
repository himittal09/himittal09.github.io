import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

import { ContactQuery } from '@app/shared/classes/query';
import { ProjectCard } from '@app/shared/classes/projectCard';
import { Achievement } from '@app/shared/classes/achievement';

// use these files till for development
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

// use this line to build for production
// declare var firebase: any;

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _projects = new BehaviorSubject<ProjectCard[]>(null);
  private _achievements = new BehaviorSubject<Achievement[]>(null);
  
  private db: firebase.firestore.Firestore;

  // private db: any;
  
  constructor(private http: HttpClient) {
    this.db = firebase.firestore();
    // this.db.enablePersistence().then(() => {}, () => {});
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
        query: query.query
      }).toPromise();
    } catch (error) {
      return error;
    }
  }

  // complete
  getProjectList (): Promise<ProjectCard[]> {
    if (this._projects.value)
    {
      return this._projects.pipe(take(1)).toPromise();  
    }
    return this.db.collection('project').where('toShow', '==', true).limit(50).orderBy('displayOrder').get().then((value) => {
      let projects: ProjectCard[] = [];
      value.docs.forEach(tt => {
        let project = <ProjectCard>tt.data();
        project.projectID = tt.id;
        projects.push(project);
      });
      this._projects.next(projects);
      return this._projects.pipe(take(1)).toPromise();
    });
  }

  // complete
  getAchievementList (): Promise<Achievement[]> {
    if (this._achievements.value)
    {
      return this._achievements.pipe(take(1)).toPromise();
    }
    return this.db.collection('achievements').limit(50).orderBy('displayOrder').get().then((value) => {
      let achievements: Achievement[] = [];
      value.docs.forEach(tt => {
        let achievement = <Achievement>tt.data();
        achievement.achievementId = tt.id;
        achievements.push(achievement);
      });
      this._achievements.next(achievements);
      return this._achievements.pipe(take(1)).toPromise();
    });
  }

  // complete
  get isDayTheme (): boolean {
    let cl: DOMTokenList = document.body.classList;
    return !cl.contains('my-dark-theme');
  }

  // complete
  toggleTheme () {
    let cl: DOMTokenList = document.body.classList;
    if (this.isDayTheme)
    {
      cl.add('my-dark-theme');
      // cl.remove('my-theme');
    }
    else
    {
      // cl.add('my-theme');
      cl.remove('my-dark-theme');
    }
  }
}
