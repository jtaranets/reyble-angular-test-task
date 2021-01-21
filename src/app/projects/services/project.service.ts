import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectModel } from '@app/projects/projects/models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  API_URL = 'https://api.github.com/users/jtaranets/repos';

  constructor(private http: HttpClient) {}

  getAllRepos(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(this.API_URL);
  }
}
