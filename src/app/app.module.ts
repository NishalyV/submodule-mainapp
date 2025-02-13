import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileModule } from 'projects/profile/profile-app/projects/profile/src/public-api';
import { WorkflowModule } from 'projects/workflow/workflow-app/projects/workflow/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    WorkflowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
