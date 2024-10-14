import { Component } from '@angular/core';
import { PdfExportService } from '../../services/pdf-export.service';

@Component({
  selector: 'app-mukuru-finance',
  standalone: true,
  imports: [],
  templateUrl: './mukuru-finance.component.html',
  styleUrl: './mukuru-finance.component.scss',
})
export class MukuruFinanceComponent {

  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Mukuru Finance');
  }
}
