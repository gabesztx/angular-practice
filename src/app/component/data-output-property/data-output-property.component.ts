import { Component } from '@angular/core';
import { OutputCounterChildComponent } from './output-counter-child/output-counter-child.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-output-property',
  standalone: true,
  imports: [OutputCounterChildComponent, RouterLink],
  templateUrl: './data-output-property.component.html',
  styleUrl: './data-output-property.component.scss'
})
export class DataOutputPropertyComponent {
  classicCountFromChild = 0;
  signalCountFromChild = 0;

  onClassicCounterChange(value: number) {
    this.classicCountFromChild = value;
    console.log('Classic output received:', value);
  }

  onSignalCounterChange(value: number) {
    this.signalCountFromChild = value;
    console.log('Signal output received:', value);
  }
}
