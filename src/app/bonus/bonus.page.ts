import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from './email.service';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.page.html',
  styleUrls: ['./bonus.page.scss'],
})
export class BonusPage implements OnInit {
  email: string = '';

  constructor(private router: Router, private _mailService: EmailService) { }

  ngOnInit() {
  }

  sendEmail() {
    const subject = 'Pokemon Bonus';
    const text = 'Here is your random Pokémon!';
    const html = '<h1>Here is your random Pokémon!</h1>';

    this._mailService.sendEmail(this.email, subject, text, html).subscribe(
      response => {
        console.log('Email sent successfully', response);
      },
      error => {
        console.error('Error sending email', error);
      }
    );
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
