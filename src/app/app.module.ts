import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@ds-core/core.module';
import { ShellModule, ShellMainComponent } from './shell';

// feature modules
import { DashBoardModule } from '@ds-features/dashboard/dashboard.module';

@NgModule({
  declarations: [],
  imports: [
    // angular
    BrowserModule,
    ShellModule,
    // core
    CoreModule,

    // features
    DashBoardModule,

    // routes
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [ShellMainComponent]
})
export class AppModule { }
