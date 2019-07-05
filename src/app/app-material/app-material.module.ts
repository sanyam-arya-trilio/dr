import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [MatInputModule, MatButtonModule, MatToolbarModule, MatIconModule]
})
export class AppMaterialModule {}
