import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estadisticas.html',
  styleUrl: './estadisticas.scss',
})
export class Estadisticas {
  periods = ['Semana', 'Mes', '3 Meses'];
  activePeriod = 'Semana';

  weight = 76.2;
  weightChange = -2.3;

  /** Chart points: x 0–100, y 0–100 (lower y = higher on chart visually after invert) */
  points = [
    { x: 0, y: 22 },
    { x: 16.6, y: 30 },
    { x: 33.3, y: 38 },
    { x: 50, y: 48 },
    { x: 66.6, y: 42 },
    { x: 83.3, y: 58 },
    { x: 100, y: 68 },
  ];

  get polyline(): string {
    return this.points.map((p) => `${p.x},${p.y}`).join(' ');
  }

  bodyFat = 18.5;
  muscle = 34.2;

  setPeriod(p: string): void {
    this.activePeriod = p;
  }
}
