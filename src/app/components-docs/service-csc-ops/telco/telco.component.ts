import { Component } from '@angular/core';
import { PdfExportService } from '../../../services/pdf-export.service';

@Component({
  selector: 'app-telco',
  standalone: true,
  imports: [],
  templateUrl: './telco.component.html',
  styleUrl: './telco.component.scss'
})
export class TelcoComponent {
  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF(
      'doc-content',
      'Guide Operateur Telco',
    );
  }
}
