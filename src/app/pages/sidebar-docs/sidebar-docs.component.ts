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

  operateurGuides = [
    { name: 'Operateur Cash In & Cash Out', route: 'operateur-cash' },
    { name: 'Guide Operateur Africell Data', route: 'operateur-africell-data' },
    { name: 'Guide Operateur GPT VISA', route: 'operateur-gpt-visa' },
    { name: 'Guide Operateur MTN', route: 'operateur-mtn' },
    { name: 'Guide Operateur Telco', route: 'operateur-telco' },
    { name: 'Guide Operateur VAS', route: 'operateur-vas' },
    { name: 'Guide Operateur Vodacom Data', route: 'operateur-vodacom-data' }
  ];

  flashGuides = [
    { name: 'Guide Flash Cash Lite', route: 'flash-cash-lite' },
    { name: 'Guide Flash Marchand', route: 'flash-marchand' },
    { name: 'Guide Flash Ticket Flash Pos', route: 'flashticket-pos' },
    { name: 'Guide FlashBank', route: 'flash-bank' },
    { name: 'Guide Gestion Stock', route: 'gestion-stock' }
  ];

  rakkacashGuides = [
    { name: 'RakkaCash', route: 'rakkacash' },
    { name: 'RakkaCash Admin', route: 'rakka-admin' },
    { name: 'RakkaCash Compliance', route: 'rakka-compliance' },
    { name: 'RakkaCash Finance', route: 'rakka-finance' },
    { name: 'RakkaCash Operateur', route: 'rakka-operateur' }
  ];

  mukuruGuides = [
    { name: 'Mukuru', route: 'mukuru' },
    { name: 'Mukuru Compliance', route: 'mukuru-compliance' },
    { name: 'Mukuru Finance', route: 'mukuru-finance' },
    { name: 'Mukuru Operateur', route: 'mukuru-operateur' }
  ];

  autresServices = [
    { name: 'Bulk Notification', route: 'bulk-notification' },
    { name: 'Guide TV', route: 'guide-tv' },
    { name: 'Guide Utilisateur PAYTAX', route: 'guide-paytax' },
    { name: 'Reporting Flash Id', route: 'reporting-flashid' },
    { name: 'Western Union', route: 'western-union' },
    { name: 'MoneyGram', route: 'money-gram' },
    { name: 'RIA', route: 'ria' },
    { name: 'Sababalar', route: 'sababalar' },

    { name: 'Bulk Notification', route: 'bulk-notification' },
    { name: 'Guide TV', route: 'guide-tv' },
    { name: 'Guide Utilisateur PAYTAX', route: 'guide-paytax' },
    { name: 'Reporting Flash Id', route: 'reporting-flashid' },
    { name: 'Western Union', route: 'western-union' },
    { name: 'MoneyGram', route: 'money-gram' },
    { name: 'RIA', route: 'ria' },
    { name: 'Sababalar', route: 'sababalar' },

    { name: 'Bulk Notification', route: 'bulk-notification' },
    { name: 'Guide TV', route: 'guide-tv' },
    { name: 'Guide Utilisateur PAYTAX', route: 'guide-paytax' },
    { name: 'Reporting Flash Id', route: 'reporting-flashid' },
    { name: 'Western Union', route: 'western-union' },
    { name: 'MoneyGram', route: 'money-gram' },
    { name: 'RIA', route: 'ria' },
    { name: 'Sababalar', route: 'sababalar' }
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

