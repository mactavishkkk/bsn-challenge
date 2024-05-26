// recovery: FFCHGC496KETF5CJ6C4ELAG3
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'https://api.sendgrid.com/v3/mail/send';
  private apiKey = 'YOUR_SENDGRID_API_KEY';

  constructor(private http: HttpClient) { }

  sendEmail(to: string, subject: string, text: string, html: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const email = {
      personalizations: [{
        to: [{ email: to }],
        subject: subject
      }],
      from: { email: 'isaiasleite230@gmail.com' },
      content: [{
        type: 'text/plain',
        value: text
      }, {
        type: 'text/html',
        value: html
      }]
    };

    return this.http.post(this.apiUrl, email, { headers });
  }
}
