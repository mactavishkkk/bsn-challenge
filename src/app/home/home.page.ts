import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Pokemons: any[] = [];

  constructor(private _pokeService: PokemonService) { }

  ngOnInit() {
    this._pokeService.getAll().subscribe((response: any) => {
      this.Pokemons = response.results.map((result: any, index: number) => ({
        id: index + 1,
        name: result.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
      }));
    });
  }

}
