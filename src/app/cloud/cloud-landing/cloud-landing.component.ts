import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CloudAddDialogComponent } from '../cloud-add-dialog/cloud-add-dialog.component';
import { INewCloud } from 'src/app/interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CloudOperationsService } from '../services/cloud-operations.service';
@Component({
  selector: 'app-cloud-landing',
  templateUrl: './cloud-landing.component.html',
  styleUrls: ['./cloud-landing.component.scss']
})
export class CloudLandingComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private cloudOperationService: CloudOperationsService
  ) {}
  newCloud: INewCloud = {
    admin: '',
    domain: 'default',
    name: 'cloud1',
    password: '',
    url: ''
  };
  ngOnInit() {}
  openSnackBar(message: string, action: string, durationInSeconds: number) {
    this._snackBar.open(message, action, {
      duration: durationInSeconds * 1000
    });
  }

  checkEmpty = (newObject: Object): boolean => {
    let returnThis = true;
    Object.keys(newObject).forEach(element => {
      if (newObject[element] === '' || newObject[element] === ' ') {
        returnThis = false;
      }
    });
    return returnThis;
  }
  addCloud(): void {
    const dialogRef = this.dialog.open(CloudAddDialogComponent, {
      width: '500px',
      data: this.newCloud
    });

    dialogRef.afterClosed().subscribe((result: INewCloud) => {
      if (!this.checkEmpty(result)) {
        this.openSnackBar('All fields are required', 'Done', 2);
        this.newCloud = result;
        this.addCloud();
      } else {
        this.cloudOperationService.loginToOsCloud(result).subscribe(data => {
          console.log(data);
        });
      }
    });
  }
}
