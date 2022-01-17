import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

import { ContactQuery } from '@app/shared/classes/query';
import { ProjectCard } from '@app/shared/classes/projectCard';
import { Achievement } from '@app/shared/classes/achievement';

import { getFirestore, Firestore, collection, where, query, limit, orderBy, getDocs } from 'firebase/firestore';

import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _projects = new BehaviorSubject<ProjectCard[]>([]);
  private _projectsFetched: boolean = false;
  private _achievements = new BehaviorSubject<Achievement[]>([]);
  private _achievementsFetched: boolean = false;
  
  private db: Firestore;

  // private db: any;
  
  constructor(private http: HttpClient) {
    this.db = getFirestore();
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
        query: query.query,
        subject: query.subject
      }).toPromise();
    } catch (error) {
      return error;
    }
  }

  // complete
  getProjectList (): Promise<ProjectCard[]> {
    if (this._projectsFetched)
    {
      return this._projects.pipe(take(1)).toPromise();  
    }
    const q = query(collection(this.db, 'project'), where('toShow', '==', true), limit(50), orderBy('displayOrder'));
    return getDocs(q).then((value) => {
      let projects: ProjectCard[] = [];
      value.docs.forEach(tt => {
        let project = <ProjectCard>tt.data();
        project.projectID = tt.id;
        projects.push(project);
      });
      this._projects.next(projects);
      this._projectsFetched = true;
      return this._projects.pipe(take(1)).toPromise();
    });
  }

  // complete
  getAchievementList (): Promise<Achievement[]> {
    if (this._achievementsFetched)
    {
      return this._achievements.pipe(take(1)).toPromise();
    }
    const q = query(collection(this.db, 'achievements'), limit(50), orderBy('displayOrder'));
    return getDocs(q).then((value) => {
      let achievements: Achievement[] = [];
      value.docs.forEach(tt => {
        const achievement = <Achievement>tt.data();
        achievements.push(achievement);
      });
      this._achievements.next(achievements);
      this._achievementsFetched = true;
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
