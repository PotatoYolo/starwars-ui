import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../models/page.model';
import { Planet } from '../models/planet.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private apiUrl = 'http://localhost:8080/api/planets';

  constructor(private http: HttpClient) {}

  getAllPlanets(page: number, size: number, search: string, sort: string): Observable<Page<Planet>> {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('search', search || '');

    if (sort) {
      params = params.set('sort', sort);
    }

    return this.http.get<Page<Planet>>(this.apiUrl, { params });
  }
}
