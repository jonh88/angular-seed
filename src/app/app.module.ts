import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@ds-core/core.module';
import { ShellModule, ShellMainComponent } from './shell';

// feature modules
import { FeatureModule } from '@ds-features/feature/feature.module';

@NgModule({
  declarations: [],
  imports: [
    // angular
    BrowserModule,
    ShellModule,
    // core
    CoreModule,

    // features
    FeatureModule,

    // routes
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [ShellMainComponent]
})
export class AppModule { }
