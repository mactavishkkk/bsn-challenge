import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BonusPage } from './bonus.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmailService } from './email.service';

describe('BonusPage', () => {
  let component: BonusPage;
  let fixture: ComponentFixture<BonusPage>;
  let mockMailService: any;

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusPage);
    mockMailService = jasmine.createSpyObj(['sendEmail']);

    TestBed.configureTestingModule({
      declarations: [BonusPage],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: EmailService, useValue: mockMailService }
      ]
    }).compileComponents();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
