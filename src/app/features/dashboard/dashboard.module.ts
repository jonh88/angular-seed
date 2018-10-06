import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// ROUTES
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from '@ds-features/dashboard/routes/dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  providers: [],
})
export class DashBoardModule { }
