import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar-docs',
  standalone: true,
  imports: [ RouterOutlet, NgClass, CommonModule, RouterLink, FormsModule ],
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
    { name: 'MoneyGram', route: 'moneygram'},
    { name: 'Western Union', route: 'western-union' },
    { name: 'Ria Operateur', route: 'ria-operateur' },
    { name: 'Mukuru Operateur', route: 'mukuru-operateur' },
    { name: 'RakkaCash Operateur', route: 'rakka-operateur' },

    { name: 'Flash Transafer Lite', route: 'flash-cash-lite' },
    { name: 'Guide FlashBank', route: 'flash-bank' },
    { name: 'Canal+ | Easy Tv', route: 'canalpluseasytv'},
    { name: 'Guide Flash Marchand', route: 'flash-marchand' },
    { name: 'Guide Gestion Stock', route: 'gestion-stock' },
    
    { name: 'Operateur Cash In & Cash Out', route: 'operateur-cash' },
    { name: 'Guide Operateur Telco', route: 'telco' },
    { name: 'Mobile Money', route: 'mobile-money'},
    { name: 'Operateur Africell Data', route: 'operateur-africell-data' },
    { name: 'Operateur Vodacom Data', route: 'operateur-vodacom-data' },
    
    { name: 'Guide Operateur VAS', route: 'operateur-vas' },
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
  this.router.navigate(['/docs', route]).then(() => {   
      window.scrollTo(0, 0);  
  });  
}

  // Fonction pour changer la catégorie parent
  toggleParent(parent: string) {
    this.activeParent = this.activeParent === parent ? null : parent;
  }
}