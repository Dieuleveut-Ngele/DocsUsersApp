import { Component } from '@angular/core';
import { PdfExportService } from '../../../services/pdf-export.service';

@Component({
  selector: 'app-sababalar-operateur',
  standalone: true,
  imports: [],
  templateUrl: './sababalar-operateur.component.html',
  styleUrl: './sababalar-operateur.component.scss'
})
export class SababalarOperateurComponent {
  constructor(private pdfExportService: PdfExportService) {}
    downloadPDF() {
      this.pdfExportService.exportToPDF('doc-content', 'Guide Sababalar Operateur');
    }
}
