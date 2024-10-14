import { Component } from '@angular/core';
import { PdfExportService } from '../../services/pdf-export.service';

@Component({
  selector: 'app-ria-operateur',
  standalone: true,
  imports: [],
  templateUrl: './ria-operateur.component.html',
  styleUrl: './ria-operateur.component.scss'
})
export class RiaOperateurComponent {

  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Ria Operateur');
  }
}
