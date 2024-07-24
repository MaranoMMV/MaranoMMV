import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Assistente de TI',
        p: 'Classejl | Aug 2022 - Present',
      },
      text: '<p>Desde agosto de 2022, atuo como Assistente de TI CLT atuando como suporte tecnico, tecnico de redes, suporte tecnico a lives comercial, desenvolvedor full-stack, controle de dominio com o Active directory, manutenção de computadores e dentre outros.'
      + '<p> Também ajudei a solucionar um organizador de eventos para a empresa Classejl e setor comercial, no qual um cliente pode se cadastrar no site e verificar a lista de pessoas que compareceram no evento para realizar as compras para a sua loja. Foi utilizado para realizar esse projeto HTML, CSS, JavaScript e PHP.'
    },
    {
      summary: {
        strong: 'Estagiário de TI',
        p: 'SC - Serviços ao consumidor e teleatendimento LTDA | Out 2021 - Aug 2022',
      },
      text: '<p>Durante meu período na empresa SC de outubro de 2021 a agosto de 2022, atuei como Estagiario de TI, em aprendizagem constante, e trazendo novas ideias para a empresa</p> <p>Minhas responsabilidades  era auxiliar em demandas de suporte tecnico, help-desk e algumas automoçoes como planilhas e manutenção de computados. Na empresa utilizava o Active directory para controle do dominio, e controle de usuarios</p>'
    },
  ]);
}
