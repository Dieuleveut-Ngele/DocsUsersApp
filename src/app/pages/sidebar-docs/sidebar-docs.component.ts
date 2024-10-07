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

  constructor(private router: Router) {}

  navigateTo(route: string) {
    if (route === 'introduction') {
      this.activeParent =
        this.activeParent === 'introduction' ? null : 'introduction';
    } else {
      this.activeParent = null;
    }

    this.activeRoute = route;
    this.router.navigate(['/docs', route]);
  }

  ngOnInit() {
    this.activeRoute = this.router.url.substring(1);
  }

  toggleParent(parent: string) {
    this.activeParent = this.activeParent === parent ? null : parent;
  }
}
