import { CommonModule, NgClass } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink, 
    NgClass, 
    CommonModule, 
    RouterLinkActive,
    FormsModule,
 ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent  {
  public showPopup = false;
  public searchQuery = '';
  searchText: string = ''; // Texte de recherche
  filteredDocs: { name: string, route: string }[] = []; // Stockage des résultats filtrés

  constructor() {}

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  onSearch() {
    // Logique pour gérer la recherche ici
    console.log(this.searchQuery);
  } 
}








  
