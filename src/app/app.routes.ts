import { Routes } from '@angular/router';
import { NavBarComponent } from './pages/home/nav-bar/nav-bar.component';
import { SidebarDocsComponent } from './pages/sidebar-docs/sidebar-docs.component';
import { IntroductionComponent } from './components-docs/introduction/introduction.component';
import { BulkNotificationComponent } from './components-docs/bulk-notification/bulk-notification.component';
import { GuideFlashBankComponent } from './components-docs/guide-flash-bank/guide-flash-bank.component';
import { GuideFlashCashLiteComponent } from './components-docs/guide-flash-cash-lite/guide-flash-cash-lite.component';
import { GuideFlashMarchandComponent } from './components-docs/guide-flash-marchand/guide-flash-marchand.component';
import { GuideGestionStockComponent } from './components-docs/guide-gestion-stock/guide-gestion-stock.component';

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
          { path: 'flash-cash-lite', component: GuideFlashCashLiteComponent},
          { path: 'flash-marchand', component: GuideFlashMarchandComponent},
          { path: 'gestion-stock', component: GuideGestionStockComponent},
        ]
    }
];
