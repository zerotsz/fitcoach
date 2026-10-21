import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FrequencyId, OnboardingService, TrainingType } from '../onboarding.service';

interface FreqOption {
  id: FrequencyId;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-onboarding-entrenamiento',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './entrenamiento.html',
  styleUrl: './entrenamiento.scss',
})
export class OnboardingEntrenamiento implements OnInit {
  selectedFreq: FrequencyId | null = null;
  selectedTypes: TrainingType[] = [];

  frequencies: FreqOption[] = [
    { id: '1-2', title: '1-2 días', subtitle: 'Por semana' },
    { id: '3-4', title: '3-4 días', subtitle: 'Recomendado' },
    { id: '5-6', title: '5-6 días', subtitle: 'Nivel avanzado' },
    { id: 'diario', title: 'Diario', subtitle: 'Sin descanso' },
  ];

  types: TrainingType[] = ['Cardio', 'Fuerza', 'HIIT', 'Yoga', 'Funcional'];

  constructor(private onboarding: OnboardingService, private router: Router) {}

  ngOnInit(): void {
    const s = this.onboarding.snapshot;
    this.selectedFreq = s.frequency;
    this.selectedTypes = [...s.trainingTypes];
  }

  selectFreq(id: FrequencyId): void {
    this.selectedFreq = id;
  }

  toggleType(t: TrainingType): void {
    const i = this.selectedTypes.indexOf(t);
    if (i >= 0) {
      this.selectedTypes = this.selectedTypes.filter((x) => x !== t);
    } else {
      this.selectedTypes = [...this.selectedTypes, t];
    }
  }

  isTypeOn(t: TrainingType): boolean {
    return this.selectedTypes.includes(t);
  }

  get canContinue(): boolean {
    return !!this.selectedFreq && this.selectedTypes.length > 0;
  }

  continue(): void {
    if (!this.canContinue || !this.selectedFreq) return;
    this.onboarding.setEntrenamiento(this.selectedFreq, this.selectedTypes);
    this.router.navigate(['/onboarding/resumen']);
  }
}
