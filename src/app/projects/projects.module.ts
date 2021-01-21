import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { MapProjectsPipe } from './pipes/map-projects.pipe';

@NgModule({
  declarations: [ProjectsComponent, MapProjectsPipe],
  imports: [CommonModule, ProjectsRoutingModule],
  providers: [],
})
export class ProjectsModule {}
