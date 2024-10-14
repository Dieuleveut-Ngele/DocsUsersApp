import { Component } from '@angular/core';
import { PdfExportService } from '../../services/pdf-export.service';

@Component({
  selector: 'app-western-union',
  standalone: true,
  imports: [],
  templateUrl: './western-union.component.html',
  styleUrl: './western-union.component.scss'
})
export class WesternUnionComponent {

  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Western Union ');
  }
}
