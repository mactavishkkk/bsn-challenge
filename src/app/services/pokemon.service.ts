import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

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
    return this.http.get(`https://pokeapi.co/api/v2/pokemon-form/${id}/`);
  }

  getAllWithDetails(ids: number[]): Observable<any[]> {
    const requests = ids.map(id => this.getDetails(id));
    return forkJoin(requests);
  }
}
