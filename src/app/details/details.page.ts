import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  Pokemon: any;

  constructor(private route: ActivatedRoute, private _pokeService: PokemonService,
    private router: Router, private loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this._pokeService.getDetails(Number(id)).subscribe((data) => {
        this.Pokemon = data;
      });
    } else {
      this.goBack();
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      duration: 1500,
    });
    await loading.present();
  }

  getColor(colorName: string): string {
    const colorMap: { [key: string]: string } = {
      green: 'success',
      red: 'danger',
      blue: 'primary',
      yellow: 'warning',
      purple: 'secondary',
      pink: 'tertiary',
      brown: 'medium',
      black: 'dark',
      white: 'light',
      gray: 'medium',
    };
    return colorMap[colorName] || 'default';
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
