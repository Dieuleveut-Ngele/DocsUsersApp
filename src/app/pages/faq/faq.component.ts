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
      question: "Qu'est-ce que Common Interface ?",
      answer: "Common intarface est une plateforme destinée dfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfgggggggggggggggggggggggggggggggggggggggggggggggfhuhvdfhhsjgjhgjhfgsdsjkhjhskjdhfkjhssfffffvfvv",
      open: false
    },
    {
      question: "Lorem ?",
      answer: "Lorem...",
      open: false
    },
    {
      question: "Lorem ?",
      answer: "Lorem...",
      open: false
    },
    {
      question: "Lorem ?",
      answer: "Lorem...",
      open: false
    },
    {
      question: "Lorem ?",
      answer: "Lorem...",
      open: false
    },
    {
      question: "Lorem ?",
      answer: "Lorem...",
      open: false
    },
    {
      question: "Lorem ?",
      answer: "Lorem...",
      open: false
    },
    {
      question: "Lorem ?",
      answer: "Lorem...",
      open: false
    },
    {
      question: "Lorem ?",
      answer: "Lorem...",
      open: false
    }
  ];

  toggleAnswer(item: any) {
    item.open = !item.open;
  }
}

