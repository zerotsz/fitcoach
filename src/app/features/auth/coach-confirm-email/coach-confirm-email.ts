import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coach-confirm-email',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './coach-confirm-email.html',
  styleUrl: './coach-confirm-email.scss',
})
export class CoachConfirmEmail {}
