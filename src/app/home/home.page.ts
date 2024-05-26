import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { map, switchMap } from 'rxjs';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Pokemons: any[] = [];
  currentPage: number = 1;
  totalPages: number = 5;

  constructor(private _pokeService: PokemonService, private router: Router, private loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
    this.loadPokemons(this.currentPage);
  }
  
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      duration: 1500,
    });
    await loading.present();
  }

  loadPokemons(page: number) {
    this._pokeService.getAll(page).pipe(
      switchMap((response: any) => {
        const ids = response.results.map((_: any, index: number) => (page - 1) * 20 + index + 1);
        return this._pokeService.getAllWithDetails(ids).pipe(
          map((details) => {
            return response.results.map((pokemon: any, index: number) => ({
              id: ids[index],
              name: pokemon.name,
              image: details[index].sprites.front_default,
              details: details[index]
            }));
          })
        );
      })
    ).subscribe((pokemons) => {
      this.Pokemons = pokemons;
    });
  }

  onPageChanged(page: number) {
    this.currentPage = page;
    this.loadPokemons(page);
  }

  goToBonus() {
    this.router.navigate(['/bonus']);
  }

  goToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
}
