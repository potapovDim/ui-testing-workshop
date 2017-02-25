import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app.template.html'
})
export class AppComponent {
  title: string = 'Привіт , це тестовий приклад №3 )';
  name: string;
  password: string;
  patternName = /^[A-Z,a-z]+$/g
  patternPassword = /^[0-9]+$/g
  warningPassword: boolean = false
  warningName: boolean = false
  success: boolean = false

  changeName($event: any) {
    this.name = $event.target.value
  }
  validate() {
    this.patternName.test(this.name)
      ? this.warningName = false
      : this.warningName = true
    this.patternPassword.test(this.password)
      ? this.warningPassword = false
      : this.warningPassword = true
    !this.warningPassword && !this.warningName && this.initSuccess()
  }
  initSuccess() {
    this.success = true
  }
  changePassword($event: any) {
    this.password = $event.target.value
  }
}