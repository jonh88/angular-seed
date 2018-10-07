import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

// ROUTES
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from '@ds-features/dashboard/routes/dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    DashboardRoutingModule,
  ],
  providers: [],
})
export class DashBoardModule { }
