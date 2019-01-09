import { Component, OnInit } from '@angular/core';
import { Seance } from '../seance';
import { SeanceService } from '../seance.service';

@Component({
  selector: 'app-seances-liste',
  templateUrl: './seances-liste.component.html',
  styleUrls: ['./seances-liste.component.css'],
})
export class SeancesListeComponent implements OnInit {

  seancesListe: Seance[] = new Array();

  // injection de dépendances
  constructor(private seanceService: SeanceService) { }

  // initialisé des éléments
  // fonction anonyme (params) => {  } <=> function(params) { }
  ngOnInit() {
    this.initSeances();
  }

  initSeances() {
    this.seanceService.list().subscribe((data) => {
      this.seancesListe = data;
    });
  }

  getImage(imgUrl) {
    if (imgUrl !== undefined && imgUrl.length > 0) {
      return imgUrl;
    } else {
      return 'https://imgplaceholder.com/320x320';
    }
  }

}
