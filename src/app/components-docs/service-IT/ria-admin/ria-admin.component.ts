import { Component } from '@angular/core';
import { PdfExportService } from '../../../services/pdf-export.service';

@Component({
  selector: 'app-ria-admin',
  standalone: true,
  imports: [],
  templateUrl: './ria-admin.component.html',
  styleUrl: './ria-admin.component.scss'
})
export class RiaAdminComponent {

  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Ria Admin');
  }
}
