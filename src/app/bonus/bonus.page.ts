import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.page.html',
  styleUrls: ['./bonus.page.scss'],
})
export class BonusPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  sendEmail(){
    alert('hellow');
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
