import { Component } from '@angular/core';
import { PdfExportService } from '../../../services/pdf-export.service';

@Component({
  selector: 'app-sababalar-finance',
  standalone: true,
  imports: [],
  templateUrl: './sababalar-finance.component.html',
  styleUrl: './sababalar-finance.component.scss',
})
export class SababalarFinanceComponent {
  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Sababalar Finance');
  }
}
