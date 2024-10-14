import { Component } from '@angular/core';
import { PdfExportService } from '../../services/pdf-export.service';

@Component({
  selector: 'app-rakkacash-admin',
  standalone: true,
  imports: [],
  templateUrl: './rakkacash-admin.component.html',
  styleUrl: './rakkacash-admin.component.scss',
})
export class RakkacashAdminComponent {

  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Rakkacash Admin');
  }
}
