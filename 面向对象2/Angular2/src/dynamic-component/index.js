import { Component, View } from 'angular2/angular2';
import styles from './dynamic-component.css';

export default class DynamicComponent {
  constructor() {
    this.seconds = Math.ceil(Math.random() * 100);
    setInterval(() => this.seconds++, 1000);
  }

  static get annotations() {
    return [
      new Component({
        selector: 'dynamic-component'
      }),
      new View({
        template: `<div class="${styles.container}">I count {{ seconds }} seconds.</div>`
      })
    ];
  }
}