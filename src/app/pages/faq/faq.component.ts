import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})

export class FaqComponent {
  faqItems = [
    {
      question: "Est-ce que l’application FlashApp consomme de la Data ?",
      answer: "Non, si vous utilisez notre Carte Sim Flash Net. Dans le cas contraire, chaque transaction consomme environ 7KB.",
      paragraph: "",
      open: false
    },
    {
      question: "Quand est-ce que je reçois mes commissions ?",
      answer: "Vous recevez vos commissions (bonus) après chaque opération.",
      open: false
    },
    {
      question: "Comment je vérifie mes bonus (Commissions) ?",
      answer: "Vos bonus ou commissions vont directement dans le compte FCN.",
      open: false
    },
    {
      question: "Pourquoi invité ou parrainé quelqu’un sur FlashApp ?",
      answer: "Inviter ou parrainer un(e) ami(e) sur FlashApp, vous permet de gagner de bonus de parrainage sur sa consommation du 1er mois. La personne parrainée doit utiliser votre Flash ID comme code parrain lors de son enregistrement sur l’application. Le bouton d’invitation se trouve, le profil de vos comptes.",
      open: false
    },
    {
      question: "Quelle est la différence entre un Agent Flash et un utilisateur Flash ?",
      answer: "Un utilisateur Flash (statut x1 et x2) est celui qui utilise l’application pour ces besoins personnels. Il peut atteindre automatiquement le statut X3 s’il consomme plus de 500 $ mensuellement.",
      paragraph: " Un Agent Flash (statut x3 et x4) est celui qui utilise l’application pour son activité commerciale. Il reçoit des commissions sur chacune de ses opérations de vente.",
      open: false
    },
    {
      question: "Où puis-je faire un dépôt (cash-in) dans mon compte ?",
      answer: "Dans nos agences Flash/CFC ou auprès d’un agent Flash ; par un versement bancaire dans l’une de nos comptes que vous trouverez sur l’application ; ou soit par mobile money. Trouvez le point de vente plus proche de chez vous sur https://www.google.com/maps/search/cfc%2Fflash/",
      open: false
    },
    {
      question: "Quel est le montant minimum du dépôt dans un compte FlashApp ?",
      answer: "Le montant minimum est de 1 $ ou son équivalent en CDF pour un profil utilisateur et de 50$ pour un profil agent",
      open: false
    },
    {
      question: "Est-ce possible de faire un retrait de mon compte ?",
      answer: "Oui, vous pouvez retirer de l’argent de votre compte FlashApp, dans l’une de nos agences/ou chez un agent Flash, soit via un transfert bancaire ou vers votre numéro mobile money.",
      open: false
    },
    {
      question: "Qu'est-ce que je peux faire avec mes Flash Coins (FCN) ?",
      answer: "Avec le FCN, vous pouvez acheter ou revendre tous nos produits et services (TELCO, DATA, réabonnement TV…) sur FlashApp ou le transférer à vos proches sur leur compte FlashApp",
      open: false
    },
    {
      question: "Que vaut 1 FCN ?",
      answer: "1FCN = 0,01$ ------ 100FCN=1$",
      open: false
    },
    {
      question: "En cas de perte de mon téléphone, est ce que je perds aussi mon argent ?",
      answer: "Votre argent reste en sécurité tant que personne n’a votre mot de passe et votre code PIN. (Pour des raisons de sécurité en cas de non-activité, votre session expire au bout de 15 min). En cas de vol ou de perte, veuillez contacter le plus vite possible nos services aux 400600 (numéro vert gratuit) / 081 700 4000/ 089 000 6065  ou par WhatsApp au +24389890006065",
      open: false
    },
    {
      question: "Quelle est la balance maximum que je peux avoir dans mon compte ?",
      answer: "10000 USD ou son équivalent en CDF.",
      open: false
    },
    {
      question: "En cas d’un problème rencontré avec l’application, qui contacter ?",
      answer: "Contactez nos services clientèle au 400600 (numéro vert gratuit) / 0817004000 / 0890006065 ou par WhatsApp au +243890006065, support@flash.one",
      open: false
    }
  ];

  toggleAnswer(item: any) {
    item.open = !item.open;
  }
}

