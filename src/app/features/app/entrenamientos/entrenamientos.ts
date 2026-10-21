import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Workout {
  id: number;
  title: string;
  duration: string;
  level: string;
  exercises: number;
  tag: string;
  image: string;
}

@Component({
  selector: 'app-entrenamientos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './entrenamientos.html',
  styleUrl: './entrenamientos.scss',
})
export class Entrenamientos {
  filters = ['Todos', 'Fuerza', 'Cardio', 'HIIT', 'Yoga'];
  activeFilter = 'Todos';

  workouts: Workout[] = [
    {
      id: 1,
      title: 'Fuerza - Tren Superior',
      duration: '45 min',
      level: 'Intermedio',
      exercises: 6,
      tag: 'Fuerza',
      image: '/images/workout-fuerza.png',
    },
    {
      id: 2,
      title: 'HIIT Quemagrasa',
      duration: '25 min',
      level: 'Avanzado',
      exercises: 8,
      tag: 'HIIT',
      image: '/images/workout-hiit.png',
    },
    {
      id: 3,
      title: 'Flexibilidad & Postura',
      duration: '30 min',
      level: 'Principiante',
      exercises: 5,
      tag: 'Yoga',
      image: '/images/workout-yoga.png',
    },
    {
      id: 4,
      title: 'Poder de Piernas',
      duration: '50 min',
      level: 'Avanzado',
      exercises: 7,
      tag: 'Fuerza',
      image: '/images/workout-piernas.png',
    },
  ];

  get filtered(): Workout[] {
    if (this.activeFilter === 'Todos') return this.workouts;
    return this.workouts.filter((w) => w.tag === this.activeFilter);
  }

  setFilter(f: string): void {
    this.activeFilter = f;
  }
}
