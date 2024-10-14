import { Component } from '@angular/core';
import { PdfExportService } from '../../../services/pdf-export.service';

@Component({
  selector: 'app-guide-flash-bank',
  standalone: true,
  imports: [],
  templateUrl: './guide-flash-bank.component.html',
  styleUrl: './guide-flash-bank.component.scss',
})
export class GuideFlashBankComponent {

  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Flash Bank');
  }

}
