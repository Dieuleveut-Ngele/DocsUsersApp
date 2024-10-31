import { Component } from '@angular/core';
import { PdfExportService } from '../../../services/pdf-export.service';

@Component({
  selector: 'app-rakkacash-finance',
  standalone: true,
  imports: [],
  templateUrl: './rakkacash-finance.component.html',
  styleUrl: './rakkacash-finance.component.scss',
})
export class RakkacashFinanceComponent {
  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Rakkacash Finance');
  }
}
