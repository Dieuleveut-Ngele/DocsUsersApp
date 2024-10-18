import { Injectable } from '@angular/core';
import html2pdf from 'html2pdf.js';

@Injectable({
  providedIn: 'root'
})
export class PdfExportService {

  constructor() {}

  exportToPDF(elementId: string, fileName: string) {
    const element = document.getElementById(elementId);

    if (element) {
      const opt = {
        margin:       1,
        filename:     `${fileName}.pdf`, 
        image:        { type: 'jpeg', quality: 0.8 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      html2pdf().from(element).set(opt).save();
    } else {
      console.error(`L'élément avec l'ID "${elementId}" n'a pas été trouvé.`);
    }
  }
}
