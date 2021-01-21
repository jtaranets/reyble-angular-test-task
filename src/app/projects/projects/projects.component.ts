import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectModel } from '@app/projects/projects/models/project.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<ProjectModel[]>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.projects$ = this.route.data.pipe(map((data) => data.projects));
  }
}
