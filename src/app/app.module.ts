import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnboardingAppComponent } from './onboarding-app/onboarding-app.component';
import { OnboardFormComponent } from './onboard-form/onboard-form.component';
import { ViewStudentListComponent } from './view-student-list/view-student-list.component';
import {RouterModule} from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { StudentfilterPipe } from './pipes/studentfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OnboardingAppComponent,
    OnboardFormComponent,
    ViewStudentListComponent,
    LoginPageComponent,
    StudentfilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
