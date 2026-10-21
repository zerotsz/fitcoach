import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coach-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './coach-register.html',
  styleUrl: './coach-register.scss',
})
export class CoachRegister {
  form: FormGroup;
  showPassword = false;
  isSubmitting = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      terms: [false, [Validators.requiredTrue]],
    });
  }

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
  get terms() { return this.form.get('terms'); }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    this.errorMessage = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
      // Tras postular → pantalla de éxito / revisar correo
      this.router.navigate(['/coach/confirm-email'], {
        queryParams: { email: this.form.value.email },
      });
    }, 900);
  }

  registerWithGoogle(): void {
    console.log('Google coach register (pendiente)');
  }

  registerWithApple(): void {
    console.log('Apple coach register (pendiente)');
  }
}
