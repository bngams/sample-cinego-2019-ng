import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeancesListeComponent } from './seances-liste/seances-liste.component';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { SeanceService } from './seance.service';
import { SeanceDetailsComponent } from './seance-details/seance-details.component';

@NgModule({
  declarations: [SeancesListeComponent, SeanceDetailsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    SeancesListeComponent
  ],
  providers: [
    SeanceService
  ]
})
export class SeancesModule { }
