import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { UserAccessService, UserAccess } from '../../services/user-access.service';

@Component({
  selector: 'app-sidebar-docs',
  standalone: true,
  imports: [RouterOutlet, NgClass, CommonModule, FormsModule],
  templateUrl: './sidebar-docs.component.html',
  styleUrl: './sidebar-docs.component.scss'
})
export class SidebarDocsComponent implements OnInit {
  userAccess: UserAccess = {
    finance: false,
    it: false,
    conformite: false,
    cscOps: false,
    marketing: false
  };

  activeParent: string | null = null;
  activeRoute: string = '';
  searchText: string = '';
  filteredDocs: { name: string; route: string }[] = [];

  conformite = [
    { name: 'RakkaCash Compliance', route: 'rakka-compliance', category: 'conformite' },
    { name: 'Mukuru Compliance', route: 'mukuru-compliance', category: 'conformite' },
    { name: 'Ria Compliance', route: 'ria-compliance', category: 'conformite' },
    { name: 'Sababalar Compliance', route: 'saba-compliance', category: 'conformite' },
  ];

  marketing = [
    { name: 'Flash Contact', route: 'flash-contact', category: 'marketing' },
    { name: 'Bulk Notification', route: 'bulk-notification', category: 'marketing' },
  ];

  it = [
    { name: 'Reporting Flash Id', route: 'reporting-flashid', category: 'it' },
    { name: 'RakkaCash Admin', route: 'rakka-admin', category: 'it' },
    { name: 'Sababalar Admin', route: 'saba-admin', category: 'it' },
    { name: 'Ria Admin', route: 'ria-admin', category: 'it' },
    { name: 'API Mukuru', route: 'api-mukuru', category: 'it' }
  ];

  finance = [
    { name: 'Mukuru Finance', route: 'mukuru-finance', category: 'finance' },
    { name: 'RakkaCash Finance', route: 'rakka-finance', category: 'finance' },
    { name: 'Sababalar Finance', route: 'saba-finance', category: 'finance' },
    { name: 'Ria Finance', route: 'ria-finance', category: 'finance' },
    { name: 'Parametrage Compta', route: 'parametrage-compta', category: 'finance' },
  ];

  cscOps = [
    { name: 'MoneyGram', route: 'moneygram', category: 'cscOps' },
    { name: 'Western Union', route: 'western-union', category: 'cscOps' },
    { name: 'Ria Operateur', route: 'ria-operateur', category: 'cscOps' },
    { name: 'Mukuru Operateur', route: 'mukuru-operateur', category: 'cscOps' },
    { name: 'RakkaCash Operateur', route: 'rakka-operateur', category: 'cscOps' },
    { name: 'Sababalar Operateur', route: 'saba-operateur', category: 'cscOps' },
    { name: 'Flash Transfer Lite', route: 'flash-transfer-lite', category: 'cscOps' },
    { name: 'Flash Transfer Classique', route: 'flash-transfer-classique', category: 'cscOps' },
    { name: 'Guide FlashBank', route: 'flash-bank', category: 'cscOps' },
    { name: 'Canal+ | Easy Tv', route: 'canalpluseasytv', category: 'cscOps' },
    { name: 'Bleusat', route: 'bleusat', category: 'cscOps' },
    { name: 'Guide Flash Marchand', route: 'flash-marchand', category: 'cscOps' },
    { name: 'Guide Gestion Stock', route: 'gestion-stock', category: 'cscOps' },
    { name: 'Operateur Cash In & Cash Out', route: 'operateur-cash', category: 'cscOps' },
    { name: 'Guide Operateur Telco', route: 'telco', category: 'cscOps' },
    { name: 'Mobile Money', route: 'mobile-money', category: 'cscOps' },
    { name: 'Guide Operateur VAS', route: 'operateur-vas', category: 'cscOps' },
    { name: 'Guide Utilisateur PAYTAX', route: 'guide-paytax', category: 'cscOps' },
  ];

  constructor(
    private router: Router,
    private userAccessService: UserAccessService
  ) {}

  ngOnInit() {
    this.userAccessService.getUserAccess().subscribe((access) => {
      this.userAccess = access;
      console.log('Accès utilisateur chargés :', this.userAccess);
    });
  }

  /** 🔍 Recherche améliorée : tient compte des accès utilisateur */
  searchDocs() {
    const allDocs = [
      ...this.conformite,
      ...this.marketing,
      ...this.it,
      ...this.finance,
      ...this.cscOps,
    ];

    const search = this.searchText.toLowerCase();

    this.filteredDocs = allDocs.filter((doc) => {
      const category = doc.category as keyof UserAccess;
      const hasAccess = this.userAccess[category];
      return hasAccess && doc.name.toLowerCase().includes(search);
    });
  }

  navigateTo(route: string) {
    this.activeRoute = route;
    this.router.navigate(['/docs', route]).then(() => {
      window.scrollTo(0, 0);
    });
  }

  toggleParent(parent: string) {
    this.activeParent = this.activeParent === parent ? null : parent;
  }
}

