import { Component } from '@angular/core';

/**
 * App component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
/**
 * Component class
 */
export class AppComponent {
  title = 'dr';

  /*
   * @example
   * add(10+20)
   *
   * @param {number} a  The target to process see {@link Todo}
   * @param {number} b  The target to process see {@link Todo}
   *
   * @returns sum of the numbers
   */
  public add(x: number, y: number) {
    return x + y;
  }
}
