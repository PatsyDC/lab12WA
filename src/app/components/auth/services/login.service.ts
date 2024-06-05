import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {}

  // Utilizar localStorage para persistir el estado de autenticación
  get isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  set isLoggedIn(value: boolean) {
    if (value) {
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      localStorage.removeItem('isLoggedIn');
    }
  }

  get username(): string {
    return localStorage.getItem('username') || '';
  }

  set username(value: string) {
    if (value) {
      localStorage.setItem('username', value);
    } else {
      localStorage.removeItem('username');
    }
  }

  login(username: string, password: string): boolean {
    if (username === 'patsy' && password === '1234') {
      this.isLoggedIn = true;
      this.username = username;
      return true;
    } else {
      this.isLoggedIn = false;
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    this.username = '';
  }
}
