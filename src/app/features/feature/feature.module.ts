import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// ROUTES
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from '@ds-features/feature/routes/feature/feature.component';

@NgModule({
  declarations: [
    FeatureComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
  ],
  providers: [],
})
export class FeatureModule { }
