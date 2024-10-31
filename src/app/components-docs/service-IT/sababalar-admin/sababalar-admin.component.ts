import { Component } from '@angular/core';
import { PdfExportService } from '../../../services/pdf-export.service';

@Component({
  selector: 'app-sababalar-admin',
  standalone: true,
  imports: [],
  templateUrl: './sababalar-admin.component.html',
  styleUrl: './sababalar-admin.component.scss',
})
export class SababalarAdminComponent {
  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Sababalar Admin');
  }
}
