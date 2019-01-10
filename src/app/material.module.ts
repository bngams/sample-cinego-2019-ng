import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule { }
