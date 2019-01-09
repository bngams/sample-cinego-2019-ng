import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeanceService } from '../seance.service';
import { Seance } from '../seance';

@Component({
  selector: 'app-seance-details',
  templateUrl: './seance-details.component.html',
  styleUrls: ['./seance-details.component.css']
})
export class SeanceDetailsComponent implements OnInit {

  seance: Seance;
  requeteTerminee: boolean;

  constructor(private route: ActivatedRoute, private seanceService: SeanceService) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    // recupérer les details de la seance
    this.seanceService.get(id).subscribe((data) => {
      this.seance = data;
      this.requeteTerminee = true;
    });
  }

}
