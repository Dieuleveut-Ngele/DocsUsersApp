import { Component } from '@angular/core';
import { PdfExportService } from '../../../services/pdf-export.service';

@Component({
  selector: 'app-flash-transfer-classique',
  standalone: true,
  imports: [],
  templateUrl: './flash-transfer-classique.component.html',
  styleUrl: './flash-transfer-classique.component.scss',
})
export class FlashTransferClassiqueComponent {
  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF(
      'doc-content',
      'Flash Transfer Classique',
    );
  }
}
