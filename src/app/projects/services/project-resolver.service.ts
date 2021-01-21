import { Injectable } from '@angular/core';
import { ProjectService } from '@app/projects/services/project.service';
import { Resolve } from '@angular/router';
import { ProjectModel } from '@app/projects/projects/models/project.model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProjectResolverService implements Resolve<ProjectModel[]> {
  constructor(private projectService: ProjectService) {}

  resolve(): Observable<ProjectModel[]> {
    return this.projectService.getAllRepos().pipe(
      catchError((err) => {
        return of([]);
      })
    );
  }
}
