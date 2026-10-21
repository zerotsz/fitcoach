import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-ready',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './password-ready.html',
  styleUrl: './password-ready.scss',
})
export class PasswordReady implements OnInit {
  role: 'cliente' | 'coach' = 'cliente';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const r = this.route.snapshot.queryParamMap.get('role');
    this.role = r === 'coach' ? 'coach' : 'cliente';
  }

  /** Redirección automática según de dónde vino */
  get loginLink(): string {
    return this.role === 'coach' ? '/coach/login' : '/login';
  }

  get loginLabel(): string {
    return this.role === 'coach' ? 'Iniciar sesión como coach' : 'Iniciar sesión';
  }
}
