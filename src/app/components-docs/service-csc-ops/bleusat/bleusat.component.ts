import { Component } from '@angular/core';
import { PdfExportService } from '../../../services/pdf-export.service';

@Component({
  selector: 'app-bleusat',
  standalone: true,
  imports: [],
  templateUrl: './bleusat.component.html',
  styleUrl: './bleusat.component.scss'
})
export class BleusatComponent {
  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Bleusat');
  }
}
