import { Component, Inject, signal } from '@angular/core';
import { IAwards } from '../../../interface/IAwards.interfaces';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-awards',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-awards.component.html',
  styleUrl: './dialog-awards.component.scss'
})
export class DialogAwardsComponent {
  constructor(
    private _dialogRef: MatDialogRef<DialogAwardsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IAwards
  ) {}

  public getData = signal<IAwards | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public closeModal() {
    return this._dialogRef.close();
  }
}
