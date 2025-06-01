import { Component, Input, input, effect } from '@angular/core';

@Component({
  selector: 'app-input-counter-child',
  standalone: true,
  templateUrl: './input-counter-child.component.html',
  styleUrls: ['./input-counter-child.component.scss']
})
export class InputCounterChildComponent {
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
