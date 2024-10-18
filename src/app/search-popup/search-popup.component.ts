import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-popup',
  standalone: true,
  imports: [CommonModule],  // Ajoute cette ligne pour rendre le composant standalone
  templateUrl: './search-popup.component.html',
  styleUrls: ['./search-popup.component.scss']
})
export class SearchPopupComponent {
  public showPopup = false;

  constructor() {}

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-search-popup',
//   templateUrl: './search-popup.component.html',
//   styleUrls: ['./search-popup.component.scss']
// })
// export class SearchPopupComponent {
//   showPopup: boolean = false;

//   openPopup() {
//     this.showPopup = true;
//   }

//   closePopup() {
//     this.showPopup = false;
//   }
// }

