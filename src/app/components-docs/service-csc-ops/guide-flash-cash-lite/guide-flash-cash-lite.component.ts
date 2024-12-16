import { Component } from '@angular/core';
import { PdfExportService } from '../../../services/pdf-export.service';

@Component({
  selector: 'app-guide-flash-cash-lite',
  standalone: true,
  imports: [],
  templateUrl: './guide-flash-cash-lite.component.html',
  styleUrl: './guide-flash-cash-lite.component.scss',
})
export class GuideFlashCashLiteComponent {
  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Flash Transfer Lite');
  }
}
