import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-popup',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './search-popup.component.html',
  styleUrls: ['./search-popup.component.scss'],
})
export class SearchPopupComponent {
  showPopup: boolean = false;

  constructor() {}

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
}
