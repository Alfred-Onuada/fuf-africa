import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'fuf-volunteer-modal',
  standalone: true,
  imports: [],
  templateUrl: './volunteer-modal.component.html',
  styleUrl: './volunteer-modal.component.css'
})
export class VolunteerModalComponent {
  constructor(
    public dialogRef: MatDialogRef<VolunteerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeModal(): void {
    this.dialogRef.close();
  }
}
