import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HasAccessTokenGuard } from '@app/auth/has-access-token.guard';

const routes: Routes = [
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then((m) => m.ProjectsModule),
    canLoad: [HasAccessTokenGuard],
  },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
