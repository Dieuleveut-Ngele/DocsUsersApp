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

    element.classList.add('pdf-no-margin');

    const opt = {
      margin: 0.3,
      filename: `${fileName}.pdf`,
      image: { type: 'jpeg', quality: 0.8 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save().then(() => {
      element.classList.remove('pdf-no-margin');
    });
  } else {
    console.error(`L'élément avec l'ID "${elementId}" n'a pas été trouvé.`);
  }
 }
} 

// import { Injectable } from '@angular/core';
// import html2pdf from 'html2pdf.js';

// @Injectable({
//   providedIn: 'root'
// })
// export class PdfExportService {

//   constructor() {}

//   exportToPDF(elementId: string, fileName: string) {
//     const element = document.getElementById(elementId);

//     if (element) {
//       // Applique la classe pour retirer la marge en haut
//       element.classList.add('pdf-no-margin');
      
//       // Sélectionne toutes les images dans l'élément et applique la bordure temporairement
//       const images = element.querySelectorAll('img');
//       images.forEach((img) => img.classList.add('pdf-image-border'));

//       const opt = {
//         margin: 0.3,
//         filename: `${fileName}.pdf`,
//         image: { type: 'jpeg', quality: 0.8 },
//         html2canvas: { scale: 2, useCORS: true },
//         jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//       };

//       html2pdf().from(element).set(opt).save().then(() => {
//         // Supprime la classe après la génération du PDF
//         element.classList.remove('pdf-no-margin');
//         images.forEach((img) => img.classList.remove('pdf-image-border'));
//       });
//     } else {
//       console.error(`L'élément avec l'ID "${elementId}" n'a pas été trouvé.`);
//     }
//   }
// }



