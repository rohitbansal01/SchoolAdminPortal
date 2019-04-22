import { Component, OnInit } from '@angular/core';
import {Admin, LoginService} from '../../Services/Login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  adminModel: Admin = {
    name: '',
    password: null
  };

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  /**
   * Verify the login details provided by the user.
   */
  doLogin() {
    if (this.loginService.verifyAdminUser(this.adminModel)) {
      this.router.navigate(['./portal']);
    } else {
    }
  }
}
