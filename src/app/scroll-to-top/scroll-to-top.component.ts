import { Component, HostListener } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.scss'
})
export class ScrollToTopComponent {
  isVisible: boolean = false;  

  constructor(private scrollService: ScrollService) {}  

  @HostListener('window:scroll', [])  
  onWindowScroll() {  
    this.isVisible = this.scrollService.isScrolledMoreThan(800);  
  }  

  scrollToTop() {  
    this.scrollService.scrollToTop();  
  } 
}
