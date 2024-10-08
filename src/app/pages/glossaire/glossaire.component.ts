import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-glossaire',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './glossaire.component.html',
  styleUrl: './glossaire.component.scss'
})
export class GlossaireComponent {
  glossary = [
    { term: 'API', definition: 'Interface de programmation qui permet à deux applications de communiquer entre elles.' },
    { term: 'Frontend', definition: 'La partie visible d’une application avec laquelle les utilisateurs interagissent.' },
    { term: 'Backend', definition: 'La partie d’un système qui gère les données et la logique derrière une application.' },
    { term: 'Component', definition: 'Un élément modulaire réutilisable dans une application Angular.' },
    { term: 'Service', definition: 'Une classe qui gère la logique métier et les données partagées dans l’application.' },
    { term: 'SAG', definition: 'Une classe qui gère la logique métier et les données partagées dans l’application.' },
    { term: 'Service', definition: 'Une classe qui gère la logique métier et les données partagées dans l’application.' },
    { term: 'Service', definition: 'Une classe qui gère la logique métier et les données partagées dans l’application.' },
    { term: 'Service', definition: 'Une classe qui gère la logique métier et les données partagées dans l’application.' },
    { term: 'Service', definition: 'Une classe qui gère la logique métier et les données partagées dans l’application.' },
    { term: 'Service', definition: 'Une classe qui gère la logique métier et les données partagées dans l’application.' },
    { term: 'Service', definition: 'Une classe qui gère la logique métier et les données partagées dans l’application.' },
    { term: 'Service', definition: 'Une classe qui gère la logique métier et les données partagées dans l’application.' },
    { term: 'Service', definition: 'Une classe qui gère la logique métier et les données partagées dans l’application.' }
  ];

}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-glossary',
//   templateUrl: './glossary.component.html',
//   styleUrls: ['./glossary.component.css']
// })
// export class GlossaryComponent {
 
// }

