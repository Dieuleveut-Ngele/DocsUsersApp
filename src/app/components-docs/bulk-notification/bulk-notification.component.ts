import { Component } from '@angular/core';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-bulk-notification',
  standalone: true,
  imports: [],
  templateUrl: './bulk-notification.component.html',
  styleUrl: './bulk-notification.component.scss',
})

export class BulkNotificationComponent {

  exportToPDF() { 
    const element = document.getElementById('doc-content'); 
    const opt = {
      margin:       1,
      filename:     'Bulk Notification.pdf',
      image:        { type: 'png', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
  }
}











