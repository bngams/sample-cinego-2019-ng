import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seance } from './seance';
import { Observable } from 'rxjs';

// peut etre injecté automatiquement
@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  // injection de dépendances
  constructor(private http: HttpClient) { }

  list(): Observable<Seance[]> {
    return this.http.get<Seance[]>('http://localhost:8282/seances');
  }

  get(id: number): Observable<Seance> {
    return this.http.get<Seance>('http://localhost:8282/seances/' + id);
  }

  create(seance: Seance): Observable<Seance> {
    return this.http.post<Seance>('http://localhost:8282/seances/', seance);
  }
}
