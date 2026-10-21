import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './client-layout.html',
  styleUrls: ['./client-layout.scss'],
})
export class ClientLayout {
  nav = [
    { path: '/app', label: 'Inicio', exact: true, icon: 'home' },
    { path: '/app/entrenamientos', label: 'Entrenamientos', exact: false, icon: 'dumbbell' },
    { path: '/app/nutricion', label: 'Nutrición', exact: false, icon: 'apple' },
    { path: '/app/estadisticas', label: 'Estadísticas', exact: false, icon: 'chart' },
    { path: '/app/perfil', label: 'Perfil', exact: false, icon: 'user' },
  ];
}