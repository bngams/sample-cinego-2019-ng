import { Component, OnInit } from '@angular/core';
import { Seance } from '../seance';

@Component({
  selector: 'app-seance-form',
  templateUrl: './seance-form.component.html',
  styleUrls: ['./seance-form.component.css']
})
export class SeanceFormComponent implements OnInit {

  seance: Seance = {
    id: null,
    title: '',
    img: '',
    dateTime: ''
  };

  errorMsg: String = '';

  constructor() { }

  ngOnInit() {
  }

  saveSeance() {
    // if you want to handle errors on controller side
    if (this.isValid()) {
      console.log(this.seance);
      // appel a seanceService
      // create
    }
  }

  isValid() {
    if (this.seance.title.length <= 2) {
      this.errorMsg = 'Titre trop court';
      return false;
    }
    return true;
  }

}
