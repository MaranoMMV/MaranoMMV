import { Component, Inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ICertificate } from '../../../interface/ICertificate.interface';

@Component({
  selector: 'app-dialog-certificates',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-certificates.component.html',
  styleUrl: './dialog-certificates.component.scss'
})
export class DialogCertificatesComponent {
  constructor(
    private _dialogRef: MatDialogRef<DialogCertificatesComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: ICertificate
  ) {}

  public getData = signal<ICertificate | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public closeModal() {
    return this._dialogRef.close();
  }
}
