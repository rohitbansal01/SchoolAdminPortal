import { NgModule } from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';
import {OnboardFormComponent} from './onboard-form/onboard-form.component';
import {CommonModule} from '@angular/common';
import {LoginPageComponent} from './login-page/login-page.component';
import {ViewStudentListComponent} from './view-student-list/view-student-list.component';
import {OnboardingAppComponent} from './onboarding-app/onboarding-app.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: []
  },
  {
    path: 'portal',
    component: OnboardingAppComponent,
    canActivate: [],
    children: [
      {
        path: 'onBoardForm',
        component: OnboardFormComponent,
        canActivate: []
      },
      {
        path: 'view',
        component: ViewStudentListComponent,
        canActivate: []
      },
      {
        path: '',
        redirectTo: 'onBoardForm',
        pathMatch: 'full',
        canActivate: []

      },
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
