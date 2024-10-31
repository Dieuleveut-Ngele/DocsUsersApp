import { Component } from '@angular/core';
import { PdfExportService } from '../../../services/pdf-export.service';

@Component({
  selector: 'app-operateur-vodacom-data',
  standalone: true,
  imports: [],
  templateUrl: './operateur-vodacom-data.component.html',
  styleUrl: './operateur-vodacom-data.component.scss',
})
export class OperateurVodacomDataComponent {
  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF(
      'doc-content',
      'Guide Operateur Vodacom Data',
    );
  }
}
