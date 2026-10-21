import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-check-email',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './forgot-check-email.html',
  styleUrl: './forgot-check-email.scss',
})
export class ForgotCheckEmail implements OnInit {
  email = '';
  role: 'cliente' | 'coach' = 'cliente';
  isResending = false;
  resent = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.email = this.route.snapshot.queryParamMap.get('email') || 'tucorreo@ejemplo.com';
    const r = this.route.snapshot.queryParamMap.get('role');
    this.role = r === 'coach' ? 'coach' : 'cliente';
  }

  get loginLink(): string {
    return this.role === 'coach' ? '/coach/login' : '/login';
  }

  resend(): void {
    if (this.isResending) return;
    this.isResending = true;
    this.resent = false;
    setTimeout(() => {
      this.isResending = false;
      this.resent = true;
    }, 1100);
  }

  goToReset(): void {
    this.router.navigate(['/reset-password'], {
      queryParams: { email: this.email, role: this.role },
    });
  }
}
