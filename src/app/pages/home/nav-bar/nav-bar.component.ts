import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, NgClass, CommonModule, RouterLinkActive, FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  activeParent: string | null = null;
  activeRoute: string = '';
  public showPopup = false;
  public searchQuery = ''; // Utilisation de searchQuery dans l'input et la recherche
  filteredDocs: { name: string; route: string }[] = [];

  // Documents
  conformite = [
    { name: 'RakkaCash Compliance', route: 'rakka-compliance' },
    { name: 'Mukuru Compliance', route: 'mukuru-compliance' },
    { name: 'Ria Compliance', route: 'ria-compliance' },
    { name: 'Sababalar Compliance', route: 'saba-compliance' },
  ];

  marketing = [
    { name: 'Flash Contact', route: 'flash-contact' },
    { name: 'Bulk Notification', route: 'bulk-notification' },
  ];

  it = [
    { name: 'Reporting Flash Id', route: 'reporting-flashid' },
    { name: 'RakkaCash Admin', route: 'rakka-admin' },
    { name: 'Sababalar Admin', route: 'saba-admin' },
    { name: 'Ria Admin', route: 'ria-admin' },
  ];

  finance = [
    { name: 'Mukuru Finance', route: 'mukuru-finance' },
    { name: 'RakkaCash Finance', route: 'rakka-finance' },
    { name: 'Sababalar Finance', route: 'saba-finance' },
    { name: 'Ria Finance', route: 'ria-finance' },
    { name: 'Parametrage Compta', route: 'parametrage-compta' },
  ];

  cscOps = [
    { name: 'Guide Flash Cash Lite', route: 'flash-cash-lite' },
    { name: 'Guide Flash Marchand', route: 'flash-marchand' },
    { name: 'Guide FlashBank', route: 'flash-bank' },
    { name: 'Guide Gestion Stock', route: 'gestion-stock' },
    { name: 'Mukuru Operateur', route: 'mukuru-operateur' },
    { name: 'RakkaCash Operateur', route: 'rakka-operateur' },
    { name: 'Ria Operateur', route: 'ria-operateur' },
    { name: 'Operateur Cash In & Cash Out', route: 'operateur-cash' },
    { name: 'Guide Operateur Africell Data', route: 'operateur-africell-data' },
    { name: 'Guide Operateur Telco', route: 'operateur-telco' },
    { name: 'Guide Operateur VAS', route: 'operateur-vas' },
    { name: 'Guide Operateur Vodacom Data', route: 'operateur-vodacom-data' },
    { name: 'Guide Utilisateur PAYTAX', route: 'guide-paytax' },
    { name: 'MoneyGram', route: 'moneygram' },
    { name: 'Western Union', route: 'western-union' },
  ];

  constructor(private router: Router) {}

  // Méthode de recherche
  searchDocs() {
    const allDocs = [
      ...this.conformite,
      ...this.marketing,
      ...this.it,
      ...this.finance,
      ...this.cscOps,
    ];
    this.filteredDocs = allDocs.filter((doc) =>
      doc.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
    );
  }

  // Navigation vers le document sélectionné
  navigateTo(route: string) {
    this.activeRoute = route;
    this.router.navigate(['/docs', route]);
    this.closePopup();
  }

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
}
