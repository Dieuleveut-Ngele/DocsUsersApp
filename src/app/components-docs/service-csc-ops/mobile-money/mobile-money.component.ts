import { Component } from '@angular/core';
import { PdfExportService } from '../../../services/pdf-export.service';

@Component({
  selector: 'app-mobile-money',
  standalone: true,
  imports: [],
  templateUrl: './mobile-money.component.html',
  styleUrl: './mobile-money.component.scss',
})
export class MobileMoneyComponent {
  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Mobile Money');
  }
}
