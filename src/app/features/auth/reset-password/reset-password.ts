import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const p = control.get('password')?.value;
  const c = control.get('confirmPassword')?.value;
  if (!p || !c) return null;
  return p === c ? null : { passwordMismatch: true };
}

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss',
})
export class ResetPassword implements OnInit {
  form: FormGroup;
  showPassword = false;
  showConfirm = false;
  isSubmitting = false;
  email = '';
  role: 'cliente' | 'coach' = 'cliente';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: passwordMatchValidator }
    );
  }

  ngOnInit(): void {
    this.email = this.route.snapshot.queryParamMap.get('email') || '';
    const r = this.route.snapshot.queryParamMap.get('role');
    this.role = r === 'coach' ? 'coach' : 'cliente';
  }

  get password() { return this.form.get('password'); }
  get confirmPassword() { return this.form.get('confirmPassword'); }

  get backLoginLink(): string {
    return this.role === 'coach' ? '/coach/login' : '/login';
  }

  togglePassword(): void { this.showPassword = !this.showPassword; }
  toggleConfirm(): void { this.showConfirm = !this.showConfirm; }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
      this.router.navigate(['/password-ready'], {
        queryParams: { role: this.role },
      });
    }, 900);
  }
}
