import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  signal
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header } from '../../layout/header/header';

@Component({
  selector: 'app-landing',
  imports: [RouterLink, Header],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing implements AfterViewInit, OnDestroy {
  // Signals for dynamic interactive values
  readonly isPlayingAudio = signal(true);
  readonly transformedCount = signal(500);
  readonly adherenceRate = signal('98.4');
  readonly weeksCount = signal(12);
  readonly weeklyAdherence = signal(98);
  readonly progressWidth = signal(71);

  private observer?: IntersectionObserver;
  private animFrameIds: number[] = [];
  private hasAnimatedStats = false;
  private hasAnimatedAdherence = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // Reset to 0 for browser animation entrance
    this.transformedCount.set(0);
    this.adherenceRate.set('0.0');
    this.weeksCount.set(0);
    this.progressWidth.set(0);
    this.weeklyAdherence.set(0);

    this.initScrollAnimations();
    this.animateHeroCounters();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
    this.animFrameIds.forEach((id) => cancelAnimationFrame(id));
  }

  toggleAudio(): void {
    this.isPlayingAudio.update((playing) => !playing);
  }

  private initScrollAnimations(): void {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.12
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');

          // If adherence card comes into view, animate counter
          if (
            !this.hasAnimatedAdherence &&
            (entry.target.classList.contains('cf-cards') ||
              entry.target.classList.contains('como-funciona') ||
              entry.target.classList.contains('cf-card-adherence'))
          ) {
            this.hasAnimatedAdherence = true;
            this.animateNumber(0, 98, 1400, (val) => {
              this.weeklyAdherence.set(Math.round(val));
            });
          }

          // Unobserve once animated unless it's a section containing child elements
          this.observer?.unobserve(entry.target);
        }
      });
    }, options);

    // Query all sections and animatable targets
    const animElements = document.querySelectorAll(
      '.anim-reveal, .sistema, .como-funciona, .cf-cards, .resultados-reales, .coaches, .planes, .comunidad, .cta-final, .footer'
    );

    animElements.forEach((el) => this.observer?.observe(el));
  }

  private animateHeroCounters(): void {
    if (this.hasAnimatedStats) return;
    this.hasAnimatedStats = true;

    // Smooth progress bar fill
    setTimeout(() => {
      this.animateNumber(0, 71, 1400, (val) => {
        this.progressWidth.set(Math.round(val));
      });
    }, 300);

    // +500 counter
    setTimeout(() => {
      this.animateNumber(0, 500, 1600, (val) => {
        this.transformedCount.set(Math.round(val));
      });
    }, 200);

    // 98.4% counter
    setTimeout(() => {
      this.animateNumber(0, 98.4, 1800, (val) => {
        this.adherenceRate.set(val.toFixed(1));
      });
    }, 350);

    // 12 semanas counter
    setTimeout(() => {
      this.animateNumber(0, 12, 1300, (val) => {
        this.weeksCount.set(Math.round(val));
      });
    }, 500);
  }

  private animateNumber(
    start: number,
    end: number,
    durationMs: number,
    onUpdate: (value: number) => void
  ): void {
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Cubic ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = start + (end - start) * eased;

      onUpdate(val);

      if (progress < 1) {
        const id = requestAnimationFrame(step);
        this.animFrameIds.push(id);
      } else {
        onUpdate(end);
      }
    };

    const id = requestAnimationFrame(step);
    this.animFrameIds.push(id);
  }
}