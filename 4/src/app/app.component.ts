import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app.template.html'
})
export class AppComponent {
  title: string = 'Привіт , це тестовий приклад №4 )';

  getDatasFromChild(data: any){
    console.log(data)
  }
}