import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '@ds-core/constants';

import { NotFoundComponent } from '@ds-core/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTES.FEATURE.path,
    pathMatch: 'full'
  },
  {
    path: ROUTES.FEATURE.path,
    loadChildren: ROUTES.FEATURE.module,
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
