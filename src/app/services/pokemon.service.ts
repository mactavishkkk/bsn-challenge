import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getAll(page: number = 1): Observable<any> {
    const limit = 20;
    const offset = (page - 1) * limit;
    return this.http.get(`${this.apiUrl}/pokemon/?offset=${offset}&limit=${limit}`);
  }

  getDetails(id: number): Observable<any> {
    const pokeUrl = `${this.apiUrl}/pokemon/${id}/`;
    const pokeSpeciesUrl = `${this.apiUrl}/pokemon-species/${id}/`;

    return forkJoin([
      this.http.get(pokeUrl),
      this.http.get(pokeSpeciesUrl),
    ]).pipe(
      map(([pokeUrl, pokeSpeciesUrl]) => {
        return { ...pokeUrl, ...pokeSpeciesUrl };
      })
    );
  }

  getDetailsForm(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon-form/${id}/`);
  }

  getAllWithDetails(ids: number[]): Observable<any[]> {
    const requests = ids.map(id => this.getDetailsForm(id));
    return forkJoin(requests);
  }
}
