import { Component, Input, input, effect } from '@angular/core';

@Component({
  selector: 'app-counter-child',
  standalone: true,
  templateUrl: './counter-child.component.html',
  styleUrls: ['./counter-child.component.scss']
})
export class CounterChildComponent {
  @Input() classicCounter = 0;
  signalCounter = input<number>(0);

  constructor() {
    // Effect to monitor changes to signalCounter
    effect(() => {
      const currentValue = this.signalCounter();
      console.log('Signal Counter changed:', currentValue);
    });
  }
}
