import { Component } from '@angular/core';
import { PdfExportService } from '../../services/pdf-export.service';

@Component({
  selector: 'app-guide-flash-shop',
  standalone: true,
  imports: [],
  templateUrl: './guide-flash-shop.component.html',
  styleUrl: './guide-flash-shop.component.scss',
})
export class GuideFlashShopComponent {

  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Flash Shop');
  }
}
