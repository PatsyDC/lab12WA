import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginService } from "../services/login.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: LoginService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit(): void {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    const isLoggedIn = this.authService.login(username, password);

    if (isLoggedIn) {
      this.router.navigate(['/home']);
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
      this.loginForm.reset();
    }
  }
}
