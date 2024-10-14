import { Component } from '@angular/core';
import { PdfExportService } from '../../../services/pdf-export.service';

@Component({
  selector: 'app-mukuru-operateur',
  standalone: true,
  imports: [],
  templateUrl: './mukuru-operateur.component.html',
  styleUrl: './mukuru-operateur.component.scss',
})
export class MukuruOperateurComponent {

  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Mukuru Operateur');
  }
}
