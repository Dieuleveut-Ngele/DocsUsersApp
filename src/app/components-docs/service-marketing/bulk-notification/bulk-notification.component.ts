import { Component } from '@angular/core';
import { PdfExportService } from '../../services/pdf-export.service';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-bulk-notification',
  standalone: true,
  imports: [],
  templateUrl: './bulk-notification.component.html',
  styleUrl: './bulk-notification.component.scss',
})

export class BulkNotificationComponent {

  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Bulk Notification');
  }

}











