import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OnboardingService } from '../onboarding.service';

@Component({
  selector: 'app-onboarding-resumen',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './resumen.html',
  styleUrl: './resumen.scss',
})
export class OnboardingResumen implements OnInit {
  goalLabel = '—';
  frequencyLabel = '—';
  duration = '12 Semanas';

  constructor(private onboarding: OnboardingService, private router: Router) {}

  ngOnInit(): void {
    this.goalLabel = this.onboarding.goalLabel();
    this.frequencyLabel = this.onboarding.frequencyLabel();
  }

  start(): void {
    // Frontend: ir al dashboard (cuando exista). Por ahora landing.
    this.router.navigate(['/']);
  }
}
