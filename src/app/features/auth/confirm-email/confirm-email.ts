import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-email',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './confirm-email.html',
  styleUrl: './confirm-email.scss',
})
export class ConfirmEmail implements OnInit {
  email = '';
  isResending = false;
  resent = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.email = this.route.snapshot.queryParamMap.get('email') || 'tucorreo@ejemplo.com';
  }

  resend(): void {
    if (this.isResending) return;
    this.isResending = true;
    this.resent = false;
    setTimeout(() => {
      this.isResending = false;
      this.resent = true;
    }, 1200);
  }
}
