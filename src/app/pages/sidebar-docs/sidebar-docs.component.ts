import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar-docs',
  standalone: true,
  imports: [RouterOutlet, NgClass, CommonModule, RouterLink],
  templateUrl: './sidebar-docs.component.html',
  styleUrl: './sidebar-docs.component.scss',
})


export class SidebarDocsComponent {
  activeParent: string | null = null;
  activeRoute: string = '';

  conformite = [
    { name: 'RakkaCash Compliance', route: 'rakka-compliance' },
    { name: 'Mukuru Compliance', route: 'mukuru-compliance' },
    { name: 'Ria Compliance', route: 'ria-compliance' },
    { name: 'Sababalar Compliance', route: 'saba-compliance' },
    
  ];

  marketing = [
    { name: 'Bulk Notification', route: 'bulk-notification' },
    { name: 'Flash Contact', route: 'flash-contact' },
   
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
    { name: 'Parametrage Compta', route: 'parametrage-compta' }
    
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
    { name: 'MoneyGram', route: 'money-gram' },
    { name: 'Western Union', route: 'western-union' },  
  ];

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.activeRoute = route;
    this.router.navigate(['/docs', route]);
  }

  toggleParent(parent: string) {
    this.activeParent = this.activeParent === parent ? null : parent;
  }
}

