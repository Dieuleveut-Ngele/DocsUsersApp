import { Routes } from '@angular/router';
import { NavBarComponent } from './pages/home/nav-bar/nav-bar.component';
import { SidebarDocsComponent } from './pages/sidebar-docs/sidebar-docs.component';
import { IntroductionComponent } from './components-docs/introduction/introduction.component';
import { BulkNotificationComponent } from './components-docs/service-marketing/bulk-notification/bulk-notification.component';
import { GuideFlashBankComponent } from './components-docs/service-csc-ops/guide-flash-bank/guide-flash-bank.component';
import { GuideFlashCashLiteComponent } from './components-docs/service-csc-ops/guide-flash-cash-lite/guide-flash-cash-lite.component';
import { GuideFlashMarchandComponent } from './components-docs/service-csc-ops/guide-flash-marchand/guide-flash-marchand.component';
import { GuideGestionStockComponent } from './components-docs/service-csc-ops/guide-gestion-stock/guide-gestion-stock.component';
import { OperateurCashinCashoutComponent } from './components-docs/service-csc-ops/operateur-cashin-cashout/operateur-cashin-cashout.component';
import { MoneyGramComponent } from './components-docs/service-csc-ops/money-gram/money-gram.component';
import { MukuruComplianceComponent } from './components-docs/service-conformite/mukuru-compliance/mukuru-compliance.component';
import { MukuruFinanceComponent } from './components-docs/service-finance/mukuru-finance/mukuru-finance.component';
import { MukuruOperateurComponent } from './components-docs/service-csc-ops/mukuru-operateur/mukuru-operateur.component';
import { OperateurAfricellDataComponent } from './components-docs/service-csc-ops/operateur-africell-data/operateur-africell-data.component';
import { OperateurVodacomDataComponent } from './components-docs/service-csc-ops/operateur-vodacom-data/operateur-vodacom-data.component';
import { RakkacashAdminComponent } from './components-docs/service-IT/rakkacash-admin/rakkacash-admin.component';
import { RakkacashComplianceComponent } from './components-docs/service-conformite/rakkacash-compliance/rakkacash-compliance.component';
import { RakkacashFinanceComponent } from './components-docs/service-finance/rakkacash-finance/rakkacash-finance.component';
import { RakkacashOperateurComponent } from './components-docs/service-csc-ops/rakkacash-operateur/rakkacash-operateur.component';
import { ReportingFlashIdComponent } from './components-docs/service-IT/reporting-flash-id/reporting-flash-id.component';
import { RiaAdminComponent } from './components-docs/service-IT/ria-admin/ria-admin.component';
import { RiaComplianceComponent } from './components-docs/service-conformite/ria-compliance/ria-compliance.component';
import { RiaFinanceComponent } from './components-docs/service-finance/ria-finance/ria-finance.component';
import { RiaOperateurComponent } from './components-docs/service-csc-ops/ria-operateur/ria-operateur.component';
import { SababalarAdminComponent } from './components-docs/service-IT/sababalar-admin/sababalar-admin.component';
import { SababalarComplianceComponent } from './components-docs/service-conformite/sababalar-compliance/sababalar-compliance.component';
import { SababalarFinanceComponent } from './components-docs/service-finance/sababalar-finance/sababalar-finance.component';
import { WesternUnionComponent } from './components-docs/service-csc-ops/western-union/western-union.component';
import { FaqComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home/home.component';
import { GlossaireComponent } from './pages/glossaire/glossaire.component';  
import { TelcoComponent } from './components-docs/service-csc-ops/telco/telco.component';
import { MobileMoneyComponent } from './components-docs/service-csc-ops/mobile-money/mobile-money.component';
import { CanalPlusEtEasyTvComponent } from './components-docs/service-csc-ops/canal-plus-et-easy-tv/canal-plus-et-easy-tv.component';
import { BleusatComponent } from './components-docs/service-csc-ops/bleusat/bleusat.component';
import { FlashTransferClassiqueComponent } from './components-docs/service-csc-ops/flash-transfer-classique/flash-transfer-classique.component';
import { ParametrageComptaComponent } from './components-docs/service-finance/parametrage-compta/parametrage-compta.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'glossaire', component: GlossaireComponent },
  {
    path: 'docs',
    component: SidebarDocsComponent,
    children: [
      { path: '', component: IntroductionComponent },
      { path: 'introduction', component: IntroductionComponent },
      { path: 'bulk-notification', component: BulkNotificationComponent },
      { path: 'flash-bank', component: GuideFlashBankComponent },
      { path: 'canalpluseasytv', component: CanalPlusEtEasyTvComponent},
      { path: 'bleusat', component: BleusatComponent},
      { path: 'flash-transfer-lite', component: GuideFlashCashLiteComponent },
      { path: 'flash-transfer-classique', component: FlashTransferClassiqueComponent},
      { path: 'flash-marchand', component: GuideFlashMarchandComponent },
      { path: 'gestion-stock', component: GuideGestionStockComponent },
      { path: 'operateur-cash', component: OperateurCashinCashoutComponent },
      { path: 'moneygram', component: MoneyGramComponent },
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
      { path: 'telco', component: TelcoComponent},
      { path: 'parametrage-compta', component: ParametrageComptaComponent},
      { path: 'mobile-money', component: MobileMoneyComponent},
      { path: 'rakka-admin', component: RakkacashAdminComponent },
      { path: 'rakka-compliance', component: RakkacashComplianceComponent },
      { path: 'rakka-finance', component: RakkacashFinanceComponent },
      { path: 'rakka-operateur', component: RakkacashOperateurComponent },
      { path: 'reporting-flashid', component: ReportingFlashIdComponent },
      { path: 'ria-admin', component: RiaAdminComponent },
      { path: 'ria-compliance', component: RiaComplianceComponent },
      { path: 'ria-finance', component: RiaFinanceComponent },
      { path: 'ria-operateur', component: RiaOperateurComponent },

      { path: 'saba-admin', component: SababalarAdminComponent },
      { path: 'saba-compliance', component: SababalarComplianceComponent },
      { path: 'saba-finance', component: SababalarFinanceComponent },
      { path: 'western-union', component: WesternUnionComponent },
    ],
  },
];

