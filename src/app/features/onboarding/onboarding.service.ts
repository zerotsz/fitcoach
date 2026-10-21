import { Injectable } from '@angular/core';

export type GoalId = 'bajar-peso' | 'ganar-musculo' | 'mantener-peso' | 'rendimiento';
export type FrequencyId = '1-2' | '3-4' | '5-6' | 'diario';
export type TrainingType = 'Cardio' | 'Fuerza' | 'HIIT' | 'Yoga' | 'Funcional';

export interface OnboardingData {
  goal: GoalId | null;
  age: number | null;
  height: number | null;
  weight: number | null;
  sex: string | null;
  frequency: FrequencyId | null;
  trainingTypes: TrainingType[];
}

@Injectable({ providedIn: 'root' })
export class OnboardingService {
  private data: OnboardingData = {
    goal: null,
    age: null,
    height: null,
    weight: null,
    sex: null,
    frequency: null,
    trainingTypes: [],
  };

  get snapshot(): OnboardingData {
    return { ...this.data, trainingTypes: [...this.data.trainingTypes] };
  }

  setGoal(goal: GoalId): void {
    this.data.goal = goal;
  }

  setDatos(payload: { age: number; height: number; weight: number; sex: string }): void {
    this.data.age = payload.age;
    this.data.height = payload.height;
    this.data.weight = payload.weight;
    this.data.sex = payload.sex;
  }

  setEntrenamiento(frequency: FrequencyId, trainingTypes: TrainingType[]): void {
    this.data.frequency = frequency;
    this.data.trainingTypes = [...trainingTypes];
  }

  goalLabel(): string {
    const map: Record<GoalId, string> = {
      'bajar-peso': 'Bajar de peso',
      'ganar-musculo': 'Ganar músculo',
      'mantener-peso': 'Mantener peso',
      rendimiento: 'Rendimiento deportivo',
    };
    return this.data.goal ? map[this.data.goal] : '—';
  }

  frequencyLabel(): string {
    const map: Record<FrequencyId, string> = {
      '1-2': '1-2 días / semana',
      '3-4': '3-4 días / semana',
      '5-6': '5-6 días / semana',
      diario: 'Diario',
    };
    return this.data.frequency ? map[this.data.frequency] : '—';
  }

  reset(): void {
    this.data = {
      goal: null,
      age: null,
      height: null,
      weight: null,
      sex: null,
      frequency: null,
      trainingTypes: [],
    };
  }
}
