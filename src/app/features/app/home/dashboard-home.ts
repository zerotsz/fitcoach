import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard-home.html',
  styleUrl: './dashboard-home.scss',
})
export class DashboardHome {
  userName = 'Juan';
  kcal = 1420;
  kcalGoal = 2000;
  water = 1.2;
  waterGoal = 3;
  steps = 6200;
  stepsGoal = 10000;

  get kcalPct(): number {
    return Math.min(100, Math.round((this.kcal / this.kcalGoal) * 100));
  }
  get waterPct(): number {
    return Math.min(100, (this.water / this.waterGoal) * 100);
  }
  get stepsPct(): number {
    return Math.min(100, (this.steps / this.stepsGoal) * 100);
  }

  /** stroke-dashoffset for circle (circumference ~ 2*pi*54 ≈ 339) */
  get ringOffset(): number {
    const c = 339;
    return c - (c * this.kcalPct) / 100;
  }
}
