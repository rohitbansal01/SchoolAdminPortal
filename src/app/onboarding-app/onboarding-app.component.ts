import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding-app',
  templateUrl: './onboarding-app.component.html',
  styleUrls: ['./onboarding-app.component.css']
})
export class OnboardingAppComponent implements OnInit {

  userName: any;

  constructor() { }

  ngOnInit() {
    this.userName = localStorage.getItem('userName');
  }
}
