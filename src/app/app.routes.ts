import { Routes } from '@angular/router';
import { NavBarComponent } from './pages/home/nav-bar/nav-bar.component';
import { SidebarDocsComponent } from './pages/sidebar-docs/sidebar-docs.component';
import { IntroductionComponent } from './components-docs/introduction/introduction.component';
import { BulkNotificationComponent } from './components-docs/bulk-notification/bulk-notification.component';
import { GuideFlashBankComponent } from './components-docs/guide-flash-bank/guide-flash-bank.component';
import { GuideFlashCashLiteComponent } from './components-docs/guide-flash-cash-lite/guide-flash-cash-lite.component';
import { GuideFlashMarchandComponent } from './components-docs/guide-flash-marchand/guide-flash-marchand.component';
import { GuideGestionStockComponent } from './components-docs/guide-gestion-stock/guide-gestion-stock.component';
import { OperateurCashinCashoutComponent } from './components-docs/operateur-cashin-cashout/operateur-cashin-cashout.component';
import { MoneyGramComponent } from './components-docs/money-gram/money-gram.component';
import { MukuruComplianceComponent } from './components-docs/mukuru-compliance/mukuru-compliance.component';
import { MukuruFinanceComponent } from './components-docs/mukuru-finance/mukuru-finance.component';
import { MukuruOperateurComponent } from './components-docs/mukuru-operateur/mukuru-operateur.component';
import { OperateurAfricellDataComponent } from './components-docs/operateur-africell-data/operateur-africell-data.component';
import { OperateurVodacomDataComponent } from './components-docs/operateur-vodacom-data/operateur-vodacom-data.component';
import { RakkacashAdminComponent } from './components-docs/rakkacash-admin/rakkacash-admin.component';
import { RakkacashComplianceComponent } from './components-docs/rakkacash-compliance/rakkacash-compliance.component';
import { RakkacashFinanceComponent } from './components-docs/rakkacash-finance/rakkacash-finance.component';
import { RakkacashOperateurComponent } from './components-docs/rakkacash-operateur/rakkacash-operateur.component';
import { ReportingFlashIdComponent } from './components-docs/reporting-flash-id/reporting-flash-id.component';
import { RiaAdminComponent } from './components-docs/ria-admin/ria-admin.component';
import { RiaComplianceComponent } from './components-docs/ria-compliance/ria-compliance.component';
import { RiaFinanceComponent } from './components-docs/ria-finance/ria-finance.component';
import { RiaOperateurComponent } from './components-docs/ria-operateur/ria-operateur.component';
import { SababalarAdminComponent } from './components-docs/sababalar-admin/sababalar-admin.component';
import { SababalarComplianceComponent } from './components-docs/sababalar-compliance/sababalar-compliance.component';
import { SababalarFinanceComponent } from './components-docs/sababalar-finance/sababalar-finance.component';
import { WesternUnionComponent } from './components-docs/western-union/western-union.component';
import { FaqComponent } from './pages/faq/faq.component';

export const routes: Routes = [
  { path: '', component: NavBarComponent },
  { path: 'faq', component: FaqComponent},
  {
    path: 'docs',
    component: SidebarDocsComponent,
    children: [
      { path: '', component: IntroductionComponent },
      { path: 'introduction', component: IntroductionComponent },
      { path: 'bulk-notification', component: BulkNotificationComponent },
      { path: 'flash-bank', component: GuideFlashBankComponent },
      { path: 'flash-cash-lite', component: GuideFlashCashLiteComponent },
      { path: 'flash-marchand', component: GuideFlashMarchandComponent },
      { path: 'gestion-stock', component: GuideGestionStockComponent },
      { path: 'operateur-cash', component: OperateurCashinCashoutComponent },
      { path: 'money-gram', component: MoneyGramComponent },
      { path: 'mukuru-compliance', component: MukuruComplianceComponent },
      { path: 'mukuru-finance', component: MukuruFinanceComponent },
      { path: 'mukuru-operateur', component: MukuruOperateurComponent },
      {
        path: 'operateur-africell-data',
        component: OperateurAfricellDataComponent,
      },
      {
        path: 'operateur-vodacom-data',
        component: OperateurVodacomDataComponent,
      },
      { path: 'rakka-admin', component: RakkacashAdminComponent },
      { path: 'rakka-compliance', component: RakkacashComplianceComponent },
      { path: 'rakka-finance', component: RakkacashFinanceComponent },
      { path: 'rakka-operateur', component: RakkacashOperateurComponent },
      { path: 'reporting-flashid', component: ReportingFlashIdComponent },
      { path: 'ria-admin', component: RiaAdminComponent},
      { path: 'ria-compliance', component: RiaComplianceComponent},
      { path: 'ria-finance', component: RiaFinanceComponent},
      { path: 'ria-operateur', component: RiaOperateurComponent},

      { path: 'saba-admin', component: SababalarAdminComponent},
      { path: 'saba-compliance', component: SababalarComplianceComponent},
      { path: 'saba-finance', component: SababalarFinanceComponent},
      { path: 'western-union', component: WesternUnionComponent},


    ],
  },
];
