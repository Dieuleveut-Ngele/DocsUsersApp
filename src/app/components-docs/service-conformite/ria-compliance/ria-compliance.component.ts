import { Component } from '@angular/core';
import { PdfExportService } from '../../../services/pdf-export.service';

@Component({
  selector: 'app-ria-compliance',
  standalone: true,
  imports: [],
  templateUrl: './ria-compliance.component.html',
  styleUrl: './ria-compliance.component.scss'
})
export class RiaComplianceComponent {

  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Ria Compliance');
  }
}
