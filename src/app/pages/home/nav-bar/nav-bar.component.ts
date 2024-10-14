import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeroSectionComponent } from '../hero-section/hero-section.component';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, NgClass, HeroSectionComponent, CommonModule, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent  {

}





  
