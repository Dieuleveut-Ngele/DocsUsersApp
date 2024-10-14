import { Component } from '@angular/core';
import { PdfExportService } from '../../../services/pdf-export.service';

@Component({
  selector: 'app-operateur-africell-data',
  standalone: true,
  imports: [],
  templateUrl: './operateur-africell-data.component.html',
  styleUrl: './operateur-africell-data.component.scss',
})
export class OperateurAfricellDataComponent {

  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Operateur Africell Data');
  }
}
