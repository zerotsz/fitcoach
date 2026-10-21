import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.scss',
})
export class Perfil {
  name = 'Juan Pérez';
  memberSince = 'Miembro desde Enero 2026';
  avatar = '/images/profile-avatar.png';
  workouts = 24;
  streak = 7;
  lostKg = 2.3;

  constructor(private router: Router) {}

  logout(): void {
    this.router.navigate(['/login']);
  }
}
