import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatDividerModule,
  MatDialogModule,
  MatSnackBarModule,
  MatCardModule,
  MatListModule,
  MatTooltipModule,
  MatTabsModule,
  MatFormFieldModule,
  MatGridListModule,
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
    MatCardModule,
    MatListModule,
    MatTooltipModule,
    MatTabsModule,
    MatFormFieldModule,
    MatGridListModule,
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
    MatCardModule,
    MatListModule,
    MatTooltipModule,
    MatTabsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSidenavModule
  ]
})
export class AppMaterialModule {}
