import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    });

    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all pokemons', () => {
    const dummyPokemons = [
      { name: 'bulbasaur', sprites: { front_default: 'bulbasaur.png' } },
      { name: 'charmander', sprites: { front_default: 'charmander.png' } },
      { name: 'squirtle', sprites: { front_default: 'squirtle.png' } }
    ];
  
    service.getAll().subscribe(pokemons => {
      expect(pokemons.length).toBe(3);
      expect(pokemons[0].name).toBe('bulbasaur');
      expect(pokemons[1].name).toBe('charmander');
      expect(pokemons[2].name).toBe('squirtle');
    });
  
    const req = httpMock.expectOne(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPokemons);
  });
  

  afterEach(() => {
    httpMock.verify();
  });
});
