import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
 
// Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [MatIconModule, MatTooltipModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de html5',
      matTooltipp: 'HTML'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de css3',
      matTooltipp: 'CSS'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de javascript',
      matTooltipp: 'JavaScript'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de angular',
      matTooltipp: 'Angular'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Ícone de conhecimento de nodejs',
      matTooltipp: 'NodeJS'
    },
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Ícone de conhecimento de java',
      matTooltipp: 'Java'
    },
    {
      src: 'assets/icons/knowledge/php.svg',
      alt: 'Ícone de conhecimento de php',
      matTooltipp: 'PHP'
    },
    {
      src: 'assets/icons/knowledge/leaf-solid.svg',
      alt: 'Ícone de conhecimento de spring',
      matTooltipp: 'Spring'
    },
    {
      src: 'assets/icons/knowledge/linux.png',
      alt: 'Ícone de conhecimento de Linux',
      matTooltipp: 'Linux'
    },
  ]);
}
