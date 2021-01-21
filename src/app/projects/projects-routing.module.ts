import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from '@app/projects/projects/projects.component';
import { ProjectResolverService } from '@app/projects/services/project-resolver.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProjectsComponent,
    resolve: {
      projects: ProjectResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
