import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { INewCloud } from 'src/app/interfaces';
@Component({
  selector: 'app-cloud-add-dialog',
  templateUrl: './cloud-add-dialog.component.html',
  styleUrls: ['./cloud-add-dialog.component.scss']
})
export class CloudAddDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CloudAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: INewCloud
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
