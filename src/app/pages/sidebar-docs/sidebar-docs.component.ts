import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar-docs',
  standalone: true,
  imports: [RouterOutlet, NgClass, CommonModule, RouterLink, FormsModule],
  templateUrl: './sidebar-docs.component.html',
  styleUrl: './sidebar-docs.component.scss',
})
export class SidebarDocsComponent {
  activeParent: string | null = null;
  activeRoute: string = '';
  searchText: string = ''; 
  filteredDocs: { name: string; route: string }[] = []; 

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
    { name: 'MoneyGram', route: 'moneygram'},
    { name: 'Mukuru Operateur', route: 'mukuru-operateur' },
    { name: 'RakkaCash Operateur', route: 'rakka-operateur' },
    { name: 'Ria Operateur', route: 'ria-operateur' },
    { name: 'Operateur Cash In & Cash Out', route: 'operateur-cash' },
    { name: 'Guide Operateur Africell Data', route: 'operateur-africell-data' },
    { name: 'Guide Operateur Telco', route: 'operateur-telco' },
    { name: 'Guide Operateur VAS', route: 'operateur-vas' },
    { name: 'Guide Operateur Vodacom Data', route: 'operateur-vodacom-data' },
    { name: 'Guide Utilisateur PAYTAX', route: 'guide-paytax' },
    { name: 'Western Union', route: 'western-union' },
    { name: 'Western Union', route: 'western-union' }, 
    { name: 'Guide Utilisateur PAYTAX', route: 'guide-paytax' },
  ];

  constructor(private router: Router) {}

  // Fonction de recherche pour filtrer les documents
  searchDocs() {
    const allDocs = [
      ...this.conformite,
      ...this.marketing,
      ...this.it,
      ...this.finance,
      ...this.cscOps,
    ];
    this.filteredDocs = allDocs.filter((doc) =>
      doc.name.toLowerCase().includes(this.searchText.toLowerCase()),
    );
  }

  // Navigation vers le document sélectionné
  navigateTo(route: string) {
    this.activeRoute = route;
    this.router.navigate(['/docs', route]);
  }

  // Fonction pour changer la catégorie parent
  toggleParent(parent: string) {
    this.activeParent = this.activeParent === parent ? null : parent;
  }
}




