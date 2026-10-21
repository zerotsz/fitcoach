import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword implements OnInit {
  form: FormGroup;
  isSubmitting = false;
  /** 'cliente' | 'coach' — se arrastra por todo el flujo */
  role: 'cliente' | 'coach' = 'cliente';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    const r = this.route.snapshot.queryParamMap.get('role');
    this.role = r === 'coach' ? 'coach' : 'cliente';
  }

  get email() {
    return this.form.get('email');
  }

  /** Link de volver según rol */
  get backLoginLink(): string {
    return this.role === 'coach' ? '/coach/login' : '/login';
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
      this.router.navigate(['/forgot-password/check-email'], {
        queryParams: {
          email: this.form.value.email,
          role: this.role,
        },
      });
    }, 800);
  }
}
