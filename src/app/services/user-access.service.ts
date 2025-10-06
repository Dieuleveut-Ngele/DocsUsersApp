import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAccessService {
  // Ces attributs représentent les droits d'accès de l'utilisateur.
  // Le backend va définir ces droits, mais ici on les initialise à false.
  private access = {
    finance: false,
    it: false,
    conformite: false,
    cscOps: false,
    marketing: false
  };

  constructor() {}

  // --- Méthodes pour récupérer les accès ---
  getAccess() {
    return this.access;
  }

  // --- Méthodes pour activer/désactiver un accès ---
  setAccess(rights: Partial<typeof this.access>) {
    this.access = { ...this.access, ...rights };
  }

  // --- Méthodes rapides pour vérifier un droit spécifique ---
  canAccessFinance(): boolean {
    return this.access.finance;
  }

  canAccessIT(): boolean {
    return this.access.it;
  }

  canAccessConformite(): boolean {
    return this.access.conformite;
  }

  canAccessCSCOPS(): boolean {
    return this.access.cscOps;
  }

  canAccessMarketing(): boolean {
    return this.access.marketing;
  }
}


// this.userAccessService.setAccess({
//   finance: true,
//   it: true,
//   conformite: false
// });
