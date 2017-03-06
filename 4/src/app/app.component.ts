import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app.template.html'
})
export class AppComponent {
  title: string = 'Привіт , це тестовий приклад №4 )';
  data: object = {
    field1: null,
    field2: null  
  };
  getDatasFromChild(data: object){
    console.log(data)
    this.data = data
  }
}