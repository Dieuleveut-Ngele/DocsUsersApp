import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-glossaire',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './glossaire.component.html',
  styleUrl: './glossaire.component.scss',
})
export class GlossaireComponent {
  glossary = [
    {
      term: 'MGRN',
      definition:
        "MGRN est l'abréviation de MoneyGram Reference Number, qui correspond au numéro de référence de MoneyGram. Il s'agit d'un code unique fourni lors de l'envoi ou de la réception de fonds via MoneyGram, permettant de suivre et de gérer les transactions.",
    },
    {
      term: 'VAS',
      definition:
        'Signifie Value-Added Services (Services à Valeur Ajoutée). Ce terme est souvent utilisé dans le domaine des télécommunications et des services numériques pour désigner les services supplémentaires offerts par un opérateur ou une plateforme en plus des services de base.',
    },
    {
      term: 'POS',
      definition:
        "POS signifie Point of Sale (Point de Vente en français). C'est le lieu où une transaction a lieu, soit physiquement (comme une caisse enregistreuse dans un magasin) ou de manière virtuelle (comme un terminal de paiement en ligne).",
    },
    { term: 'FP', definition: 'Flash POS' },
    {
      term: 'MTCN',
      definition:
        "(Money Transfer Control Number). Est un numéro de contrôle utilisé pour suivre une transaction d'argent, notamment dans les services de transfert de fonds internationaux comme Western Union.",
    },

    { term: 'SAG', definition: 'Sous Agent' },
    { term: 'RZ', definition: 'Responsable Zone' },
    {
      term: 'FCN',
      definition:
        'Signifie (Flash Coin). C’est l’unité de valeur de FlashApp que vous recevez comme bonus ou commissions instantanément après chaque opération.',
    },
    { term: 'RM', definition: 'Regional Manager' },
    {
      term: 'HQ',
      definition:
        "Est l'abréviation de Headquarters, qui signifie siège social ou quartier général en français. Il désigne le lieu principal où se trouve la direction ou l'administration centrale de Flash.",
    },

    { term: 'CFC', definition: 'Compagnie Financiere au Congo.' },
    { term: 'MG', definition: 'Money Gram' },
    { term: 'WU', definition: 'Western Union' },

    {
      term: 'OPS',
      definition:
        "Abréviation de 'Operations', souvent utilisée dans le domaine des technologies de l'information (IT), en particulier dans des termes comme DevOps (Development Operations).",
    },
    { term: 'MTN', definition: '' },
  ];
}
