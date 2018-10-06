import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PersistenceService, RestService } from './services';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    BrowserModule
  ],
  providers: [
      RestService,
      PersistenceService,
  ]
})
export class CoreModule { }
