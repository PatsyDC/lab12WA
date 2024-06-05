import { Component } from '@angular/core';
import { LoginService } from '../../auth/services/login.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  constructor(public loginService: LoginService) {}

}
