import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Exercise {
  n: number;
  name: string;
  detail: string;
  thumb: string;
}

@Component({
  selector: 'app-detalle-entrenamiento',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle-entrenamiento.html',
  styleUrl: './detalle-entrenamiento.scss',
})
export class DetalleEntrenamiento implements OnInit {
  title = 'Fuerza - Tren Superior';
  duration = '45 min';
  exerciseCount = 12;
  level = 'Intermedio';
  heroImage = '/images/detail-hero.png';

  exercises: Exercise[] = [
    {
      n: 1,
      name: 'Press de Banca con Barra',
      detail: '4 series x 10 repeticiones',
      thumb: '/images/ex-1.png',
    },
    {
      n: 2,
      name: 'Aperturas con Mancuernas',
      detail: '3 series x 12 repeticiones',
      thumb: '/images/ex-2.png',
    },
    {
      n: 3,
      name: 'Flexiones de Brazos (Push-Ups)',
      detail: '3 series x Al fallo',
      thumb: '/images/ex-3.png',
    },
    {
      n: 4,
      name: 'Extensiones de Tríceps',
      detail: '3 series x 15 repeticiones',
      thumb: '/images/ex-4.png',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Mock: mismo detalle para cualquier id por ahora
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Workout detail id:', id);
  }

  startWorkout(): void {
    console.log('Iniciar entrenamiento (demo)');
  }
}
