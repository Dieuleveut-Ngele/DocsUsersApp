import { Component } from '@angular/core';
import { PdfExportService } from '../../../services/pdf-export.service';

@Component({
  selector: 'app-api-mukuru',
  imports: [],
  templateUrl: './api-mukuru.component.html',
  styleUrl: './api-mukuru.component.scss'
})
export class ApiMukuruComponent {
  constructor(private pdfExportService: PdfExportService) {}
  downloadPDF() {
    this.pdfExportService.exportToPDF('doc-content', 'API Mukuru');
  }
 
  codeToken = `{
  "username": "votre_nom_utilisateur",
  "pwd": "votre_mot_de_passe"
}`;

  codeLoadVoucher = `{
  "voucher": "EDP94AJ4",
  "mobile": "true"
}`;

  codeLoadResponse = `{
  "error": {
    "errorDescription": "success",
    "errorCode": "200"
  },
  "response": {
    "voucherNumber": "EDP94AJ4",
    "recipient": {
      "gender": "female",
      "legalIdentification": {
        "documentNumber": "4567899765",
        "type": "govIssuedIdentity",
        "issuedCountryCode": "CD"
      },
      "dateOfBirth": "1984-07-08"
    },
    "payOutAmount": {
      "value": 100.0,
      "currencyCode": "USD"
    },
    "status": "open"
  }
}`;

codePayoutRequest = `{
    "posid":"FP0009",
    "mobile":null,
    "idAgent":null,
    "voucherNumber":"EDP94AJ4",
    "givenName":"Zam",
    "additionalNames":null,
    "surname":"Zandile",
    "gender":"female",
    "dateOfBirth":"1984-07-08",
    "cityOfBirth":null,
    "taxId":null,
    "legalIdentification":
    {
        "type":"govIssuedIdentity",
        "documentNumber":"NN12325654",
        "issuedCountryCode":"CD",
        "idTypeCarteId":2,
        "dateexpirationId":null,
        "document":"image en Base 64"
            },
    "contact":
    {
        "type":"mobile",
        "value":"0824045533"
    },
    "address":
    {
        "type":"home",
        "streetAddress":"CLINIQUES",
        "suburb":"",
        "city":"KINSHASA",
        "postalCode":"",
        "countryCode":"CD",
        "idVille":1,
        "numero":30,
        "commune":"GOMBE"
    }
}`;

  codePayoutResponse = `{
  "error": {
    "errorDescription": "success",
    "errorCode": "200"
  },
  "response": {
    "payOutReference": "",
    "agentFirstName": "GERMAIN",
    "agenceName": "FLASH JEJE",
    "codeAgence": "JTT",
    "status": "success"
  }
}`;

  copyToClipboard(code: string) {
    navigator.clipboard.writeText(code);
    alert('Code copié dans le presse-papier ✅');
  }
}


  // codeTokenExample = `{
  //   "username": "votre_nom_utilisateur",
  //   "pwd": "votre_mot_de_passe"
  // }`;
  
  //   codeLoadVoucherRequest = `{
  //   "voucher": "EDP94AJ4",
  //   "mobile": "true"
  // }`;
  
  //   codeLoadVoucherResponse = `{
  //   "error": {
  //     "errorDescription": "success",
  //     "errorCode": "200"
  //   },
  //   "response": {
  //     "requirements": [
  //       "givenName",
  //       "surname",
  //       "gender",
  //       "dateOfBirth",
  //       "legalIdentification",
  //       "address"
  //     ],
  //     "sender": {
  //       "surname": "Zam",
  //       "countryCode": "ZM",
  //       "givenName": "Bob"
  //     },
  //     "voucherNumber": "EDP94AJ4",
  //     "recipient": {
  //       "gender": "female",
  //       "legalIdentification": {
  //         "documentNumber": "4567899765",
  //         "type": "govIssuedIdentity",
  //         "issuedCountryCode": "CD"
  //       },
  //       "dateOfBirth": "1984-07-08"
  //     },
  //     "payOutAmount": {
  //       "value": 100.0,
  //       "currencyCode": "USD"
  //     },
  //     "status": "open"
  //   }
  // }`;
  
  //   codePayoutResponse = `{
  //   "error": {
  //     "errorDescription": "success",
  //     "errorCode": "200"
  //   },
  //   "response": {
  //     "payOutReference": "",
  //     "agentFirstName": "GERMAIN",
  //     "agenceName": "FLASH JEJE",
  //     "codeAgence": "JTT",
  //     "status": "success"
  //   }
  // }`;
// }



