import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  constructor(private router: Router) {}

  onContinue() {
    this.router.navigateByUrl('docs');
  }
}
