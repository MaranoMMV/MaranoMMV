import { Component, OnInit, signal } from '@angular/core';
import { IIdioma } from '../../interface/IIdioma.interface';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-idiomas',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './idiomas.component.html',
  styleUrl: './idiomas.component.scss'
})
export class IdiomasComponent implements OnInit{

  dataSourceIdioma!: MatTableDataSource<IIdioma>;

  ngOnInit(): void { 
    this.dataSourceIdioma = new MatTableDataSource(this.arrayIdiomas);
 }


 arrayIdiomas: IIdioma[] =[
    {
      idioma: 'Português',
      nivel: 'Fluente'
    },
    {
      idioma: 'Ingles',
      nivel: 'Intermediario'
    },
  ]

  displayedColumns: string[] = ['idioma', 'nivel'];
}
