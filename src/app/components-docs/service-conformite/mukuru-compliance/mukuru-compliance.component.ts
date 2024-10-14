import { Component } from '@angular/core';
import { PdfExportService } from '../../services/pdf-export.service';

@Component({
  selector: 'app-mukuru-compliance',
  standalone: true,
  imports: [],
  templateUrl: './mukuru-compliance.component.html',
  styleUrl: './mukuru-compliance.component.scss',
})
export class MukuruComplianceComponent {

  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Mukuru Compliance');
  }
}
