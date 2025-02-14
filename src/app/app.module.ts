import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { FullComponent } from "./components/layouts/full/full.component";
import { MaterialModule } from './material-module';
import { AppRoutingModule } from "./app-routing.module";
import { DashboardModule } from "./components/dashboard/dashboard.module";
import { ComponentsModule } from "./components/core/core.module";
import { provideHttpClient } from "@angular/common/http";
import { LoginComponent } from './components/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent, 
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatherModule.pick(allIcons),
    MaterialModule,
    FormsModule,
    DashboardModule, ComponentsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
