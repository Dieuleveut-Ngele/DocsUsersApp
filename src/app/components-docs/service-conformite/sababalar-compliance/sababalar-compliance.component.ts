import { Component } from '@angular/core';
import { PdfExportService } from '../../services/pdf-export.service';

@Component({
  selector: 'app-sababalar-compliance',
  standalone: true,
  imports: [],
  templateUrl: './sababalar-compliance.component.html',
  styleUrl: './sababalar-compliance.component.scss'
})
export class SababalarComplianceComponent {

  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Sababalar Compliance');
  }
}
