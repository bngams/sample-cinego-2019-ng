import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTabsModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
