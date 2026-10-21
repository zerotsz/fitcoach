import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coach-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './coach-login.html',
  styleUrl: './coach-login.scss',
})
export class CoachLogin {
  form: FormGroup;
  showPassword = false;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
      console.log('Coach login:', this.form.value);
      alert('Login coach simulado OK\nEmail: ' + this.form.value.email);
    }, 900);
  }

  socialLogin(provider: string): void {
    console.log('Social coach login:', provider);
  }
}
