import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IMagazine } from '../../interface/IMagazine.interface';

@Component({
  selector: 'app-magazine',
  standalone: true,
  imports: [MatTableModule, MatIconModule],
  templateUrl: './magazine.component.html',
  styleUrl: './magazine.component.scss'
})
export class MagazineComponent implements OnInit{

  dataSourceMagazine!: MatTableDataSource<IMagazine>;


  displayedColumns: string[] = ['nome', 'publicadora', 'visualizar'];
  ngOnInit(): void {
    this.dataSourceMagazine = new MatTableDataSource(this.arraymagazine);
  }

  arraymagazine: IMagazine[] = [
    {
      nome: 'CATI FAM III',
      publicadora: 'Centro Universitario FAM',
      pagina: '1-4, 568-575',
      nomeProjeto: 'Lanche on net: Tudo que o seu restaurante precisa',
      href: 'assets/magazine/catifam3.pdf'
    },
    {
      nome: 'CATI FAM IV',
      publicadora: 'Centro Universitario FAM',
      pagina: '1-4, 216-232',
      nomeProjeto: 'Lanche on net: Tudo que o seu restaurante precisa',
      href: 'assets/magazine/catifam4.pdf'
    }
  ]

  openPDF(pdfUrl: string): void {
    window.open(pdfUrl, '_blank');
  }
}
