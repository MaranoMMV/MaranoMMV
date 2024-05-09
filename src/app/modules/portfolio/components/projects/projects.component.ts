import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/myBand.png',
      alt: 'Projeto My Band Full Stack',
      title: 'MyBand',
      with: '100px',
      height: '41px',
      description:
        '<p>Um Projeto feito para bandas de rock que desejam ter um sistema que gerencia turnês e shows. com área de fãs e envio de email automatico para os fãs informando onde vai ser realizado o show, e na criação </p>' + '<p> Se for criado um Show na mesma cidade ou estado que um fã, ele vai enviar email automaticamente, além de novos lançamentos de albuns e musicas </p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        },
      ],
    },
    {
      src: 'assets/img/projects/modaora.png',
      alt: 'Projeto ModaOra',
      title: 'ModaOra',
      with: '100px',
      height: '41px',
      description:
        '<p>Um Projeto feito para pessoas do setor da moda, no qual a home page existe uma area de cadastro de interesse da pessoa. nele consegue salvar no banco de dados e também encaminhar email informando sobre o interesse de uma pessoa para os gestores, assim eles conseguirão dar continuidade no atendimento e ver as necessidades do usuario</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
