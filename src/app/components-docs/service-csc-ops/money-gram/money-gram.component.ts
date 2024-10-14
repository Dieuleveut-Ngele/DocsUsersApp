import { Component } from '@angular/core';
import { PdfExportService } from '../../../services/pdf-export.service';

@Component({
  selector: 'app-money-gram',
  standalone: true,
  imports: [],
  templateUrl: './money-gram.component.html',
  styleUrl: './money-gram.component.scss',
})
export class MoneyGramComponent {

  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Money Gram');
  }
}
