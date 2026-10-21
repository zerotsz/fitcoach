import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GoalId, OnboardingService } from '../onboarding.service';

interface GoalOption {
  id: GoalId;
  title: string;
  subtitle: string;
  icon: string;
}

@Component({
  selector: 'app-onboarding-objetivo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './objetivo.html',
  styleUrl: './objetivo.scss',
})
export class OnboardingObjetivo implements OnInit {
  selected: GoalId | null = null;

  goals: GoalOption[] = [
    {
      id: 'bajar-peso',
      title: 'Bajar de peso',
      subtitle: 'Quema grasa y mantente en forma',
      icon: 'down',
    },
    {
      id: 'ganar-musculo',
      title: 'Ganar músculo',
      subtitle: 'Aumenta masa y fuerza',
      icon: 'up',
    },
    {
      id: 'mantener-peso',
      title: 'Mantener peso',
      subtitle: 'Optimiza tu salud y energía',
      icon: 'balance',
    },
    {
      id: 'rendimiento',
      title: 'Rendimiento deportivo',
      subtitle: 'Supera tus límites atléticos',
      icon: 'bolt',
    },
  ];

  constructor(private onboarding: OnboardingService, private router: Router) {}

  ngOnInit(): void {
    this.selected = this.onboarding.snapshot.goal;
  }

  select(id: GoalId): void {
    this.selected = id;
  }

  continue(): void {
    if (!this.selected) return;
    this.onboarding.setGoal(this.selected);
    this.router.navigate(['/onboarding/datos']);
  }
}
