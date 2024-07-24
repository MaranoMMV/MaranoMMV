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
      src: 'assets/img/projects/myevent.png',
      alt: 'MyEvent',
      title: 'MyEvent',
      with: '150px',
      height: '150px',
      description:
        '<p>Principais funcionalidades incluem o cadastro e gerenciamento de clientes, permitindo que se cadastrem e manifestem interesse em eventos, evitando duplicidade de dados. No gerenciamento de vendedores, eles acessam dados de clientes apenas com vínculo, garantindo segurança, enquanto administradores têm controle total para criar, editar e gerenciar eventos e acessos. O sistema foca totalmente na segurança dos dados, com acesso restrito a informações sensíveis.</p><p>As tecnologias utilizadas no backend incluem Java 17, Spring 3.x, Spring Security, JPA, JWT e PostgreSQL. No frontend, foram utilizados Angular, Angular Material e ngx-slick-carousel. Outras ferramentas envolvidas são NodeJS, AngularCLI e Maven. O backend é inicializado via script batch, e o frontend é executado com ng serve para facilitar o desenvolvimento e testes.</p>',
      links: [
        {
          name: 'Veja',
          href: 'https://www.linkedin.com/posts/matheus-marano_java17-spring-springsecurity-activity-7221158022587305985-T-aL?utm_source=share&utm_medium=member_desktop',
        },
      ],
    },
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
          name: 'Veja',
          href: 'https://www.linkedin.com/feed/update/urn:li:activity:7181716770674659331/?originalSubdomain=pt',
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
          name: 'Veja',
          href: 'https://www.linkedin.com/feed/update/urn:li:activity:7121610186632392704/?originalSubdomain=pt',
        },
      ],
    },
    {
      src: 'assets/img/projects/MySecretFriend.png',
      alt: 'MySecretFriend',
      title: 'MySecretFriend',
      with: '150px',
      height: '61px',
      description:
        '<p>Um Projeto para realizar sorteio de amigo secreto de forma automatica, apenas envio de email e alistagem do que os participantes gostaria de receber.</p>',
      links: [
        {
          name: 'Veja',
          href: 'https://www.linkedin.com/posts/matheus-marano-55a0a21a3_ol%C3%A1-mundo-venho-dizer-que-realizei-mais-activity-7187088332399521793-Qa16/?originalSubdomain=pt',
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
