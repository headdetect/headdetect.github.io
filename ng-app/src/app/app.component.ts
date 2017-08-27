import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /**
   * Brayden, why do you do it this way?
   *
   * So spam bots don't spam my email with...spam.
   */
  public redirectToEmail() {
    window.location.href = 'mailto://braydenjaclopez@gmail.com';
  }
}
