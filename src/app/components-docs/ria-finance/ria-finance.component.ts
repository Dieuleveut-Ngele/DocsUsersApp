import { Component } from '@angular/core';
import { PdfExportService } from '../../services/pdf-export.service';

@Component({
  selector: 'app-ria-finance',
  standalone: true,
  imports: [],
  templateUrl: './ria-finance.component.html',
  styleUrl: './ria-finance.component.scss'
})
export class RiaFinanceComponent {

  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Ria Finance');
  }
}
