import { Component } from '@angular/core';
import { PdfExportService } from '../../../services/pdf-export.service';

@Component({
  selector: 'app-guide-flash-marchand',
  standalone: true,
  imports: [],
  templateUrl: './guide-flash-marchand.component.html',
  styleUrl: './guide-flash-marchand.component.scss',
})
export class GuideFlashMarchandComponent {
  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Flash Marchand');
  }
}
