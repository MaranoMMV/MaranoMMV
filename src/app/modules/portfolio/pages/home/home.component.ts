import { Component } from '@angular/core';

// Components
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { HeaderComponent } from '../../components/header/header.component';
import { KnowledgeComponent } from '../../components/knowledge/knowledge.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { AwardsComponent } from '../../components/awards/awards.component';
import { CertificatesComponent } from '../../components/certificates/certificates.component';
import { MagazineComponent } from '../../components/magazine/magazine.component';
import { IdiomasComponent } from '../../components/idiomas/idiomas.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    KnowledgeComponent,
    ExperiencesComponent,
    ProjectsComponent,
    AwardsComponent,
    CertificatesComponent,
    MagazineComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
