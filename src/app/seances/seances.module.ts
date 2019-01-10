import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeancesListeComponent } from './seances-liste/seances-liste.component';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { SeanceService } from './seance.service';
import { SeanceDetailsComponent } from './seance-details/seance-details.component';
import { SeanceFormComponent } from './seance-form/seance-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SeancesListeComponent, SeanceDetailsComponent, SeanceFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    SeancesListeComponent
  ],
  providers: [
    SeanceService
  ]
})
export class SeancesModule { }
