import { Component } from '@angular/core';
import { PdfExportService } from '../../../services/pdf-export.service';

@Component({
  selector: 'app-guide-gestion-stock',
  standalone: true,
  imports: [],
  templateUrl: './guide-gestion-stock.component.html',
  styleUrl: './guide-gestion-stock.component.scss',
})
export class GuideGestionStockComponent {

  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Gestion Stock');
  }
}
