import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonService } from '../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let mockPokeService: any;

  beforeEach(() => {
    mockPokeService = jasmine.createSpyObj(['getAllWithDetails']);

    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: PokemonService, useValue: mockPokeService },
        { provide: ActivatedRoute, useValue: { snapshot: { params: { id: '1' } } } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
