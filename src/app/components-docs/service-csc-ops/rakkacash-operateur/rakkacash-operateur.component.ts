import { Component } from '@angular/core';
import { PdfExportService } from '../../../services/pdf-export.service';

@Component({
  selector: 'app-rakkacash-operateur',
  standalone: true,
  imports: [],
  templateUrl: './rakkacash-operateur.component.html',
  styleUrl: './rakkacash-operateur.component.scss',
})
export class RakkacashOperateurComponent {
  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF(
      'doc-content',
      'Guide Rakkacash Operateur',
    );
  }
}
