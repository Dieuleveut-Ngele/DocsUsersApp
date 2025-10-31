import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private lastHighlights: HTMLElement[] = [];

  constructor() {}

  /**
   * Recherche et met en surbrillance un mot-clé dans un document ouvert.
   * @param query Le mot recherché
   * @param containerId L'id du conteneur du document (ex: 'doc-content')
   */
  highlightInDocument(query: string, containerId: string = 'doc-content'): void {
    this.clearHighlights();
    if (!query.trim()) return;

    const container = document.getElementById(containerId);
    if (!container) return;

    const regex = new RegExp(`(${this.escapeRegExp(query)})`, 'gi');
    this.highlightText(container, regex);

    // Scroll automatique vers la première occurrence
    const firstMatch = document.querySelector('.highlight') as HTMLElement;
    if (firstMatch) {
      firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstMatch.classList.add('highlight-focus');
      setTimeout(() => firstMatch.classList.remove('highlight-focus'), 1200);
    }
  }

  /**
   * Applique la mise en surbrillance dans les nœuds du DOM
   */
  private highlightText(node: Node, regex: RegExp): void {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || '';
      if (regex.test(text)) {
        const span = document.createElement('span');
        span.innerHTML = text.replace(regex, '<mark class="highlight">$1</mark>');
        node.parentNode?.replaceChild(span, node);
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      node.childNodes.forEach(child => this.highlightText(child, regex));
    }
  }

  /**
   * Supprime toutes les surbrillances du document
   */
  clearHighlights(): void {
    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(el => {
      const parent = el.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(el.textContent || ''), el);
      }
    });
  }

  /**
   * Échappe les caractères spéciaux pour éviter les erreurs RegExp
   */
  private escapeRegExp(text: string): string {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}
