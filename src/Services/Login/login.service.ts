import { Injectable } from '@angular/core';

export interface Admin {
  name: string;
  password: string;
}

const Admin = {name: 'Admin', password: 'admin'};
const userNameKey = 'userName';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {}

  verifyAdminUser(user: Admin) {

    if (Admin.name === user.name && Admin.password === user.password) {
      localStorage.setItem(userNameKey, Admin.name);
      return true;
    }

    return false;
  }
}
