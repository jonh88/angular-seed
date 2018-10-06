import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTES } from '@ds-core/constants';

// ROUTES
import { DashboardComponent } from './routes/dashboard/dashboard.component';

const dashboarRoutes: Routes = [
    {
        path: ROUTES.DASHBOARD.path,
        component: DashboardComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(dashboarRoutes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
