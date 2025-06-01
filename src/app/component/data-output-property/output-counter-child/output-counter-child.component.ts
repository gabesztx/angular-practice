import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-output-counter-child',
  standalone: true,
  templateUrl: './output-counter-child.component.html',
  styleUrls: ['./output-counter-child.component.scss']
})
export class OutputCounterChildComponent {
  // Classic @Output property
  @Output() classicCounterChange = new EventEmitter<number>();
  classicCount = 0;

  // New signal output property
  signalCounterChange = output<number>();
  signalCount = 0;

  incrementClassicCounter() {
    this.classicCount++;
    this.classicCounterChange.emit(this.classicCount);
  }

  incrementSignalCounter() {
    this.signalCount++;
    this.signalCounterChange.emit(this.signalCount);
  }
}
