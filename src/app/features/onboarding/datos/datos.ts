import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OnboardingService } from '../onboarding.service';

@Component({
  selector: 'app-onboarding-datos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './datos.html',
  styleUrl: './datos.scss',
})
export class OnboardingDatos implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private onboarding: OnboardingService,
    private router: Router
  ) {
    this.form = this.fb.group({
      age: ['', [Validators.required, Validators.min(12), Validators.max(100)]],
      height: ['', [Validators.required, Validators.min(100), Validators.max(250)]],
      weight: ['', [Validators.required, Validators.min(30), Validators.max(300)]],
      sex: ['Masculino', Validators.required],
    });
  }

  ngOnInit(): void {
    const s = this.onboarding.snapshot;
    if (s.age) this.form.patchValue({
      age: s.age,
      height: s.height,
      weight: s.weight,
      sex: s.sex || 'Masculino',
    });
  }

  continue(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.value;
    this.onboarding.setDatos({
      age: +v.age,
      height: +v.height,
      weight: +v.weight,
      sex: v.sex,
    });
    this.router.navigate(['/onboarding/entrenamiento']);
  }
}
