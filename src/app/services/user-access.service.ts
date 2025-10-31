// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserAccessService {
//   // Ces attributs représentent les droits d'accès de l'utilisateur.
//   // Le backend va définir ces droits, mais ici on les initialise à false.
//   private access = {
//     finance: false,
//     it: false,
//     conformite: false,
//     cscOps: false,
//     marketing: true
//   };

//   constructor() {}

//   // --- Méthodes pour récupérer les accès ---
//   getAccess() {
//     return this.access;
//   }

//   // --- Méthodes pour activer/désactiver un accès ---
//   setAccess(rights: Partial<typeof this.access>) {
//     this.access = { ...this.access, ...rights };
//   }

//   // --- Méthodes rapides pour vérifier un droit spécifique ---
//   canAccessFinance(): boolean {
//     return this.access.finance;
//   }

//   canAccessIT(): boolean {
//     return this.access.it;
//   }

//   canAccessConformite(): boolean {
//     return this.access.conformite;
//   }

//   canAccessCSCOPS(): boolean {
//     return this.access.cscOps;
//   }

//   canAccessMarketing(): boolean {
//     return this.access.marketing;
//   }
// }


// // this.userAccessService.setAccess({
// //   finance: true,
// //   it: true,
// //   conformite: false
// // });

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface UserAccess {
  finance: boolean;
  it: boolean;
  conformite: boolean;
  cscOps: boolean;
  marketing: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserAccessService {

  constructor() {}

  // Simulation du backend (tu peux modifier les valeurs ici)
  getUserAccess(): Observable<UserAccess> {
    const mockAccess: UserAccess = {
      finance: true,
      it: true,
      conformite: true,
      cscOps: false,
      marketing: false
    };

    console.log(' Mock API -> Accès utilisateur simulés :', mockAccess);

    // Simule un délai réseau
    return of(mockAccess).pipe(delay(400));
  }
}
