import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  Pokemon: any;

  constructor(private route: ActivatedRoute, private _pokeService: PokemonService,
    private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this._pokeService.getDetails(Number(id)).subscribe((data) => {
        this.Pokemon = data;
      });
    } else {
      this.goBack();
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
