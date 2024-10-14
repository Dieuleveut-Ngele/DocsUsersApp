import { Component } from '@angular/core';
import { PdfExportService } from '../../../services/pdf-export.service';

@Component({
  selector: 'app-operateur-cashin-cashout',
  standalone: true,
  imports: [],
  templateUrl: './operateur-cashin-cashout.component.html',
  styleUrl: './operateur-cashin-cashout.component.scss',
})
export class OperateurCashinCashoutComponent {

  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Operateur Cashin et Cashout');
  }
}
