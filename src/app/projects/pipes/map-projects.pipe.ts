import { Pipe, PipeTransform } from '@angular/core';
import { ProjectModel } from '@app/projects/projects/models/project.model';

@Pipe({
  name: 'mapProjects',
})
export class MapProjectsPipe implements PipeTransform {
  transform(value: any[]): ProjectModel[] {
    return value.map((item) => {
      const {
        clone_url,
        created_at,
        default_branch,
        description,
        full_name,
        git_url,
        html_url,
        id,
        language,
        name,
        owner,
        pushed_at,
        size,
        updated_at,
        url,
      } = item;
      return {
        clone_url,
        created_at,
        default_branch,
        description,
        full_name,
        git_url,
        html_url,
        id,
        language,
        name,
        owner,
        pushed_at,
        size,
        updated_at,
        url,
      };
    });
  }
}
