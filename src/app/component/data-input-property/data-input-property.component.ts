import { Component, signal } from '@angular/core';
import { CounterChildComponent } from './counter-child/counter-child.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-data-input-property',
  standalone: true,
  imports: [CounterChildComponent, RouterLink],
  templateUrl: './data-input-property.component.html',
  styleUrls: ['./data-input-property.component.scss']
})
export class DataInputPropertyComponent {
  classicCount = 0;
  signalCount = signal(0);

  updateCounters() {
    this.classicCount++;
    this.signalCount.update(count => count + 1);
  }
}
