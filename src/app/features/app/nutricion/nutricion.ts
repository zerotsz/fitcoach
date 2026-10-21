import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nutricion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nutricion.html',
  styleUrl: './nutricion.scss',
})
export class Nutricion {
  days = [
    { label: 'Lun', n: 12 },
    { label: 'Mar', n: 13 },
    { label: 'Mié', n: 14 },
    { label: 'Jue', n: 15 },
    { label: 'Vie', n: 16 },
  ];
  activeDay = 14;

  kcal = 1420;
  kcalGoal = 2000;
  protein = 95;
  carbs = 140;
  fat = 42;

  get remaining(): number {
    return Math.max(0, this.kcalGoal - this.kcal);
  }

  /** Proportions for stacked macro bar (relative flex) */
  get proteinFlex(): number {
    return this.protein;
  }
  get carbsFlex(): number {
    return this.carbs;
  }
  get fatFlex(): number {
    return this.fat;
  }

  meals = [
    {
      title: 'Desayuno',
      items: [
        { name: 'Huevos revueltos con tostada', kcal: 380 },
        { name: 'Café con leche de almendras', kcal: 120 },
      ],
    },
    {
      title: 'Almuerzo',
      items: [
        { name: 'Pechuga de pollo a la plancha', kcal: 450 },
        { name: 'Arroz integral y brócoli', kcal: 220 },
      ],
    },
    {
      title: 'Cena',
      items: [{ name: 'Filete de salmón al horno', kcal: 350 }],
    },
  ];

  selectDay(n: number): void {
    this.activeDay = n;
  }
}
