import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatDividerModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSidenavModule
} from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSidenavModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSidenavModule
  ]
})
export class AppMaterialModule {}
