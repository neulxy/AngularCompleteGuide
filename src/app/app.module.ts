import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AssignmentTwoDatabindingComponent } from './assignment-two-databinding/assignment-two-databinding.component';
import { AssignmentThreeDirectivesComponent } from './assignment-three-directives/assignment-three-directives.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent, AssignmentTwoDatabindingComponent, AssignmentThreeDirectivesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
