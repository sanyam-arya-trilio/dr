import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IDialogData, INewCloud } from 'src/app/interfaces';
import { CloudAddDialogComponent } from '../cloud-add-dialog/cloud-add-dialog.component';
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
  public allClouds: INewCloud[] = [];
  public newCloud: INewCloud;
  ngOnInit() {
    this.cloudOperationService.currentCloudData.subscribe(data => {
      this.allClouds = data.map(element => {
        element.password = '';
        return element;
      });
    });
  }
  public openSnackBar(
    message: string,
    action: string,
    durationInSeconds: number
  ) {
    this._snackBar.open(message, action, {
      duration: durationInSeconds * 1000
    });
  }

  isEmpty = (newObject: Object): boolean => {
    let returnThis = false;
    Object.keys(newObject).forEach(element => {
      if (newObject[element] === '' || newObject[element] === ' ') {
        returnThis = true;
      }
    });
    return returnThis;
  }

  public addCloud(cloud?: INewCloud): void {
    const title = cloud ? 'Update cloud' : 'Add new Cloud';
    this.setDialogData(cloud);
    console.log(this.newCloud);

    const dialogRef = this.dialog.open(CloudAddDialogComponent, {
      width: '500px',
      data: {
        cloud: this.newCloud,
        title
      }
    });

    dialogRef.afterClosed().subscribe((result: IDialogData) => {
      console.log('results after close', result);

      if (result !== undefined) {
        if (this.isEmpty(result.cloud)) {
          this.openSnackBar('All fields are required', 'Done', 5);
          this.addCloud(result.cloud);
        } else {
          this.cloudOperationService
            .addNewCloud(result.cloud)
            .subscribe(clouds => {
              this.allClouds = clouds;
              console.log(this.allClouds);
            });
        }
      }
    });
  }

  private setDialogData(cloud: INewCloud) {
    this.newCloud = cloud
      ? cloud
      : {
          user: '',
          domain: 'default',
          name: '',
          password: '',
          url: ''
        };
  }
}
