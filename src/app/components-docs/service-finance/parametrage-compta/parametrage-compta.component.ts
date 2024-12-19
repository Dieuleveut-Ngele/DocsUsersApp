import { Component } from '@angular/core';
import { PdfExportService } from '../../../services/pdf-export.service';

@Component({
  selector: 'app-parametrage-compta',
  standalone: true,
  imports: [],
  templateUrl: './parametrage-compta.component.html',
  styleUrl: './parametrage-compta.component.scss'
})
export class ParametrageComptaComponent {
  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Parametrage Compta');
  }
}
