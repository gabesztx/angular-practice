import { Component, signal } from '@angular/core';
import { InputCounterChildComponent } from './input-counter-child/input-counter-child.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-data-input-property',
  standalone: true,
  imports: [InputCounterChildComponent, RouterLink],
  templateUrl: './data-input-property.component.html',
  styleUrl: './data-input-property.component.scss'
})
export class DataInputPropertyComponent {
  classicCount = 0;
  signalCount = signal(0);

  incrementClassicCounter() {
    this.classicCount++;
  }

  incrementSignalCounter() {
    this.signalCount.update(count => count + 1);
  }
}
