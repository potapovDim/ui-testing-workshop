import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app.template.html'
})
export class AppComponent {
  title: string = 'Привіт, це клікер , протестуй його )';
  clickCount: number = 0;

  handleClick() {
    this.clickCount++
  } 
}