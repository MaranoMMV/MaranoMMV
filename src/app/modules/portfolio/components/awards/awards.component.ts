import { Component, inject, signal } from '@angular/core';
import { IAwards } from '../../interface/IAwards.interfaces';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelAwardsClass } from '../../enum/EDialogPanelAwardsClass.enum';
import { DialogAwardsComponent } from '../dialog/dialog-awards/dialog-awards.component';


@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss'
})
export class AwardsComponent {
  #dialog = inject(MatDialog);

  public arrayAwards = signal<IAwards[]>([
    {
      titulo: 'Hackathon FAM 2021',
      local: 'Centro universitario FAM',
      data: 'Data que foi realizado: 06/2021',
      descricao: '<p>Participei do evento Hackathon do Centro universitário FAM, consegui em primeiro lugar da universidade</p> <p>Também recebi um troféu como merito de reconhecimento.</p>',
      src1: 'assets/img/Awards/hackathon.png',
      alt1: 'Premiação Hackathon 2021 fam',
      src2: 'assets/img/Awards/Vencedores.png',
      alt2: '',
      links: [
        {
          name: 'Hackathon',
          href: 'https://vemprafam.com.br/wp-content/uploads/2021/06/Alunos-vencedores.pdf',
        },
      ],
    },
  ])

  public openDialog(data: IAwards) {
    this.#dialog.open(DialogAwardsComponent, {
      data,
      panelClass: EDialogPanelAwardsClass.AWARDS,
    });
  }
}
