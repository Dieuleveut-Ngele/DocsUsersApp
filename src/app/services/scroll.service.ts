import { Injectable } from '@angular/core';  

@Injectable({  
  providedIn: 'root'  
})  
export class ScrollService {  
  constructor() {}  

  isScrolledMoreThan(px: number): boolean {  
    return window.scrollY > px;  
  }  

  scrollToTop(): void {  
    window.scrollTo({  
      top: 0,  
      behavior: 'smooth'  
    });  
  }  
}
