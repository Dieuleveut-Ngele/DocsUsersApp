import { Routes } from '@angular/router';
import { NavBarComponent } from './pages/home/nav-bar/nav-bar.component';
import { SidebarDocsComponent } from './pages/sidebar-docs/sidebar-docs.component';
import { IntroductionComponent } from './components-docs/introduction/introduction.component';
import { BulkNotificationComponent } from './components-docs/bulk-notification/bulk-notification.component';
import { GuideFlashBankComponent } from './components-docs/guide-flash-bank/guide-flash-bank.component';

export const routes: Routes = [
    { path: '', component: NavBarComponent },
    {
        path: 'docs',
        component: SidebarDocsComponent,
        children: [
          { path: '', component: IntroductionComponent },
          { path: 'introduction', component: IntroductionComponent },
          { path: 'bulk-notification', component: BulkNotificationComponent},
          { path: 'flash-bank', component: GuideFlashBankComponent},
        ]
    }
];
