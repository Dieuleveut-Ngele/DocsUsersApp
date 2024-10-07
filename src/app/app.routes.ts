import { Routes } from '@angular/router';
import { NavBarComponent } from './pages/home/nav-bar/nav-bar.component';
import { SidebarDocsComponent } from './pages/sidebar-docs/sidebar-docs.component';

export const routes: Routes = [
    { path: '', component: NavBarComponent },
    { path: 'docs', component: SidebarDocsComponent },
    
];
