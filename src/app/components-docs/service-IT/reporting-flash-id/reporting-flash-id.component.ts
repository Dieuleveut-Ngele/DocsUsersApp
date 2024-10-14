import { Component } from '@angular/core';
import { PdfExportService } from '../../services/pdf-export.service';

@Component({
  selector: 'app-reporting-flash-id',
  standalone: true,
  imports: [],
  templateUrl: './reporting-flash-id.component.html',
  styleUrl: './reporting-flash-id.component.scss',
})
export class ReportingFlashIdComponent {

  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Reporting FlashId');
  }
}
