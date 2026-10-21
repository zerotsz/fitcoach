  // ===== AUTH + ONBOARDING + DASHBOARD CLIENTE — app.routes.ts =====
import { Routes } from '@angular/router';

// Landing
import { Landing } from './features/landing/landing';

// Auth Cliente
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { ConfirmEmail } from './features/auth/confirm-email/confirm-email';
import { ForgotPassword } from './features/auth/forgot-password/forgot-password';
import { ForgotCheckEmail } from './features/auth/forgot-check-email/forgot-check-email';
import { ResetPassword } from './features/auth/reset-password/reset-password';
import { PasswordReady } from './features/auth/password-ready/password-ready';

// Auth Coach
import { CoachLogin } from './features/auth/coach-login/coach-login';
import { CoachRegister } from './features/auth/coach-register/coach-register';
import { CoachConfirmEmail } from './features/auth/coach-confirm-email/coach-confirm-email';

// Onboarding
import { OnboardingObjetivo } from './features/onboarding/objetivo/objetivo';
import { OnboardingDatos } from './features/onboarding/datos/datos';
import { OnboardingEntrenamiento } from './features/onboarding/entrenamiento/entrenamiento';
import { OnboardingResumen } from './features/onboarding/resumen/resumen';

// Dashboard Cliente  
import { ClientLayout } from './features/app/layout/client-layout';
import { DashboardHome } from './features/app/home/dashboard-home';
import { Entrenamientos } from './features/app/entrenamientos/entrenamientos';
import { DetalleEntrenamiento } from './features/app/detalle-entrenamiento/detalle-entrenamiento';
import { Nutricion } from './features/app/nutricion/nutricion';
import { Estadisticas } from './features/app/estadisticas/estadisticas';
import { Perfil } from './features/app/perfil/perfil';

export const routes: Routes = [
  // Landing
  { path: '', component: Landing },

  // Auth Cliente
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'confirm-email', component: ConfirmEmail },
  { path: 'forgot-password', component: ForgotPassword },
  { path: 'forgot-password/check-email', component: ForgotCheckEmail },
  { path: 'reset-password', component: ResetPassword },
  { path: 'password-ready', component: PasswordReady },

  // Auth Coach
  { path: 'coach/login', component: CoachLogin },
  { path: 'coach/register', component: CoachRegister },
  { path: 'coach/confirm-email', component: CoachConfirmEmail },

  // Onboarding
  { path: 'onboarding/objetivo', component: OnboardingObjetivo },
  { path: 'onboarding/datos', component: OnboardingDatos },
  { path: 'onboarding/entrenamiento', component: OnboardingEntrenamiento },
  { path: 'onboarding/resumen', component: OnboardingResumen },

  // Dashboard Cliente (sidebar + páginas hijas)
  {
    path: 'app',
    component: ClientLayout,
    children: [
      { path: '', component: DashboardHome },
      { path: 'entrenamientos', component: Entrenamientos },
      { path: 'entrenamientos/:id', component: DetalleEntrenamiento },
      { path: 'nutricion', component: Nutricion },
      { path: 'estadisticas', component: Estadisticas },
      { path: 'perfil', component: Perfil },
    ],
  },

  // Fallback
  { path: '**', redirectTo: '' },
];