import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTES } from '@ds-core/constants';

// ROUTES
import { FeatureComponent } from './routes/feature/feature.component';

const featureRoutes: Routes = [
    {
        path: ROUTES.FEATURE.path,
        component: FeatureComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(featureRoutes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
