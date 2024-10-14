import { Component } from '@angular/core';
import { PdfExportService } from '../../../services/pdf-export.service';

@Component({
  selector: 'app-rakkacash-compliance',
  standalone: true,
  imports: [],
  templateUrl: './rakkacash-compliance.component.html',
  styleUrl: './rakkacash-compliance.component.scss',
})
export class RakkacashComplianceComponent {

  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Rakkacash Compliance');
  }
}
