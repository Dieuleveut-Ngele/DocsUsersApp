import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router, RouterLinkActive } from '@angular/router';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { filter } from 'rxjs';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, NgClass, HeroSectionComponent, CommonModule, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {

  searchTerm: string = '';  // Variable pour stocker la recherche en cours
  docs: Array<{ title: string }> = [
    { title: 'Guide Flash Cash Lite' },
    { title: 'Guide Flash Marchand' },
    { title: 'Guide FlashBank' },
    { title: 'Guide Opérateur MTN' },
    { title: 'Guide Gestion Stock' }
    // Ajoute d'autres documents ici
  ];
  filteredDocs: Array<{ title: string }> = [...this.docs];  // Liste filtrée

  filterDocs() {
    const search = this.searchTerm.toLowerCase();
    this.filteredDocs = this.docs.filter(doc => doc.title.toLowerCase().includes(search));
  }

}





  
