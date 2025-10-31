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
export class UserService {

  constructor() {}

  // Simulation du backend (mock)
  getUserAccess(): Observable<UserAccess> {
    const mockAccess: UserAccess = {
      finance: false,
      it: false,
      conformite: false,
      cscOps: true,
      marketing: false
    };

    console.log(' Mock API -> Accès utilisateur simulés :', mockAccess);

    // simulateur de délai réseau
    return of(mockAccess).pipe(delay(500));
  }
}
