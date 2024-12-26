import { Component } from '@angular/core';
import { PdfExportService } from '../../../services/pdf-export.service';

@Component({
  selector: 'app-canal-plus-et-easy-tv',
  standalone: true,
  imports: [],
  templateUrl: './canal-plus-et-easy-tv.component.html',
  styleUrl: './canal-plus-et-easy-tv.component.scss',
})
export class CanalPlusEtEasyTvComponent {
  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'Guide Canal+ Easy Tv');
  }
}
