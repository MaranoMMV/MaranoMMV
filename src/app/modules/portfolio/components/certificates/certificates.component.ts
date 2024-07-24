import { Component, OnInit, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICertificate } from '../../interface/ICertificate.interface';
import { DialogCertificatesComponent } from '../dialog/dialog-certificates/dialog-certificates.component';
import { EDialogPanelCertificateClass } from '../../enum/EDialogPanelCertificateClass.enum';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { IdiomasComponent } from '../idiomas/idiomas.component';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [MatTableModule, MatIconModule, IdiomasComponent],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent implements OnInit {

  ngOnInit(): void { 
      this.dataSourceFormacao = new MatTableDataSource(this.arrayFormacao);
      this.dataSourceCertificados = new MatTableDataSource(this.arrayCertificado);
   }

  #dialog = inject(MatDialog);

  dataSourceFormacao!: MatTableDataSource<ICertificate>;
  dataSourceCertificados!: MatTableDataSource<ICertificate>;

  arrayFormacao: ICertificate[] = [
    {
      nome: 'Bacharelado em Sistemas de informação',
      empresa: 'Centro Universitario Fam',
      dataEmissao: '12 de Março de 2024',
      descricao: '',
      codigoCredencial: '43c258f3-35f9-4237-abf6-6e7778e851b8',
      urlDaCredencial: '',
      src1: 'assets/img/certificados/bachareladoSist.png',
      alt1: 'Certificado de conclusão curso "Bacharelado em Sistemas de Informação"',
      src2: 'assets/img/certificados/bachareladoSist.png',
      alt2: 'Certificado de conclusão curso "Bacharelado em Sistemas de Informaçã ',
      links: [
        {
          name: 'Certificado',
          href: 'https://fam.ged.docxpress.com.br/Docs/share/default.aspx?Doc=43c258f3-35f9-4237-abf6-6e7778e851b8',
        },
      ],
    },
  ];


  arrayCertificado: ICertificate[] = [
    {
      nome: 'PHP do Zero a Maestria +4 Projetos incriveis!',
      empresa: 'Udemy',
      dataEmissao: '23 de Setembro de 2022',
      descricao: '',
      codigoCredencial: 'UC-193c1fe1-2c18-4476-9be2-da7d56b60587',
      urlDaCredencial: '',
      src1: 'assets/icons/knowledge/php.svg',
      alt1: 'Certificado Udemy ',
      src2: 'assets/img/certificados/UC-193c1fe1-2c18-4476-9be2-da7d56b60587.jpg',
      alt2: 'Certificado de conclusão curso "PHP do Zero a Maestria +4 Projetos incriveis!"',
      links: [
        {
          name: 'Certificado',
          href: 'https://www.udemy.com/certificate/UC-193c1fe1-2c18-4476-9be2-da7d56b60587/',
        },
      ],
    },
    {
      nome: 'Spring Boot Expert: JPA, RESTFUL API, Security, JWT e mais',
      empresa: 'Udemy',
      dataEmissao: '12 de Setembro de 2023',
      descricao: '',
      codigoCredencial: 'UC-acc38a8a-8232-4fd2-b484-6af5089ad339',
      urlDaCredencial: '',
      src1: 'assets/icons/knowledge/leaf-solid.svg',
      alt1: 'Certificado Udemy ',
      src2: 'assets/img/certificados/UC-acc38a8a-8232-4fd2-b484-6af5089ad339.jpg',
      alt2: 'Certificado de conclusão curso Spring "Spring Boot Expert: JPA, RESTFUL API, Security, JWT e mais" ',
      links: [
        {
          name: 'Certificado',
          href: 'https://www.udemy.com/certificate/UC-acc38a8a-8232-4fd2-b484-6af5089ad339/',
        },
      ],
    },
    {
      nome: 'Java Completo 2023 Programação orientada a Objetos + Projetos',
      empresa: 'Udemy',
      dataEmissao: '27 de junho de 2023',
      descricao: '',
      codigoCredencial: 'UC-d7b4f357-c9cd-4c7e-83eb-18ddbf06d079',
      urlDaCredencial: '',
      src1: 'assets/icons/knowledge/java.svg',
      alt1: 'Certificado Udemy ',
      src2: 'assets/img/certificados/UC-d7b4f357-c9cd-4c7e-83eb-18ddbf06d079.jpg',
      alt2: 'Certificado de conclusão curso Spring "Java Completo 2023 Programação orientada a Objetos + Projetos" ',
      links: [
        {
          name: 'Certificado',
          href: 'https://www.udemy.com/certificate/UC-d7b4f357-c9cd-4c7e-83eb-18ddbf06d079/',
        },
      ],
    },
    {
      nome: 'Angular 9 + Spring Boot 2.2 Fullstack Completo e Atualizado',
      empresa: 'Udemy',
      dataEmissao: '21 de novembro de 2023',
      descricao: '',
      codigoCredencial: 'UC-d52c3440-63f7-4152-bad0-abec7f6579e8',
      urlDaCredencial: '',
      src1: 'assets/icons/knowledge/angular.svg',
      alt1: 'Certificado Udemy ',
      src2: 'assets/img/certificados/UC-d52c3440-63f7-4152-bad0-abec7f6579e8.jpg',
      alt2: 'Certificado de conclusão curso Spring "Spring Boot Expert: JPA, RESTFUL API, Security, JWT e mais" ',
      links: [
        {
          name: 'Certificado',
          href: 'https://www.udemy.com/certificate/UC-d52c3440-63f7-4152-bad0-abec7f6579e8/',
        },
      ],
    },
    {
      nome: 'Linux Fundamentos',
      empresa: 'FIAP',
      dataEmissao: '24 de Janeiro de 2024',
      descricao: '',
      codigoCredencial: '046718204df98f53ed72358eb0408436',
      urlDaCredencial: '',
      src1: 'assets/icons/knowledge/linux.svg',
      alt1: 'Certificado de conclusão curso de Linux "Linux Fundamentos" ',
      src2: 'assets/img/certificados/certificado.png',
      alt2: 'Certificado de conclusão curso de Linux "Linux Fundamentos" ',
      links: [
        {
          name: 'Certificado',
          href: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/105437/046718204df98f53ed72358eb0408436/certificado.png',
        },
      ],
    },
    {
      nome: 'Gestão de infraestrutura de TI',
      empresa: 'FIAP',
      dataEmissao: '09 de maio de 2024',
      descricao: '',
      codigoCredencial: '189eec19b98c9f5650e1f7193e3d4fd8',
      urlDaCredencial: '',
      src1: 'assets/img/certificados/gestaoinfrati.png',
      alt1: 'Certificado de conclusão Gestão de infraestrutura de TI" ',
      src2: 'assets/img/certificados/gestaoinfrati.png',
      alt2: 'Certificado de conclusão curso de Gestão de infraestrutura de TI" ',
      links: [
        {
          name: 'Certificado',
          href: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/113929/189eec19b98c9f5650e1f7193e3d4fd8/certificado.png',
        },
      ],
    },
    {
      nome: 'Angular 2 (v17+) Typescript do Básico ao Avançado',
      empresa: 'Udemy',
      dataEmissao: '19 de maio de 2024',
      descricao: '',
      codigoCredencial: 'UC-5bf3f25c-963a-45a0-a137-825c2264a8d8',
      urlDaCredencial: 'https://www.udemy.com/certificate/UC-5bf3f25c-963a-45a0-a137-825c2264a8d8/',
      src1: 'assets/img/certificados/angular.jpg',
      alt1: 'Certificado de conclusão Angular" ',
      src2: 'assets/img/certificados/angular.jpg',
      alt2: 'Certificado de conclusão Angular" ',
      links: [
        {
          name: 'Certificado',
          href: 'https://www.udemy.com/certificate/UC-5bf3f25c-963a-45a0-a137-825c2264a8d8/',
        },
      ],
    },
    {
      nome: ' Modelagem de Dados UML (Análise&Projeto Orientado a Objetos)',
      empresa: 'Udemy',
      dataEmissao: '15 de julho de 2024',
      descricao: '',
      codigoCredencial: 'UC-3a0f1e26-772b-469f-8274-75a19f6fce85',
      urlDaCredencial: 'https://www.udemy.com/certificate/UC-3a0f1e26-772b-469f-8274-75a19f6fce85/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com',
      src1: 'assets/img/certificados/uml.jpg',
      alt1: 'Certificado de conclusão Angular" ',
      src2: 'assets/img/certificados/uml.jpg',
      alt2: 'Certificado de conclusão Angular" ',
      links: [
        {
          name: 'Certificado',
          href: 'https://www.udemy.com/certificate/UC-3a0f1e26-772b-469f-8274-75a19f6fce85/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com',
        },
      ],
    },
  ]

  public openDialog(data: ICertificate) {
    this.#dialog.open(DialogCertificatesComponent, {
      data,
      panelClass: EDialogPanelCertificateClass.CERTIFICATE,
    });
  }

  displayedColumns: string[] = ['nome', 'empresa', 'visualizar'];
}
