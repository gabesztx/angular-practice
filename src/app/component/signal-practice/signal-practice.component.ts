import { Component, signal, computed, effect } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signal-practice',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './signal-practice.component.html',
  styleUrl: './signal-practice.component.scss'
})
export class SignalPracticeComponent {
  // 🔢 Alap signal: számláló
  count = signal(0,
    {
      equal: (a, b) => { // ha eléri az 5-öt, akkor nem frissít
        if (a === 5 || b === 5) {
          return true; // 5-ös érték esetén nem frissít
        }
        return a === b; // egyébként sima egyenlőség
      }
    });

  // 🟢 Új signal: státusz
  status = signal<'aktív' | 'inaktív'>('aktív');

  // ➕ Számoló metódusok
  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {
    this.count.update(value => value - 1);
  }

  reset() {
    this.count.set(0);
  }

  // 🟢 Státusz váltása
  toggleStatus() {
    const current = this.status();
    this.status.set(current === 'aktív' ? 'inaktív' : 'aktív');
  }

  // 🔄 Computed példa: count alapján származtatott érték
  parity = computed(() => {
    return this.count() % 2 === 0 ? 'páros' : 'páratlan';
  });

  // 📢 Effect: logolja mindkét signal értékét
  constructor() {
    effect(() => {
      const currentCount = this.count();
      const currentStatus = this.status();
      console.log(`[Effect] Count: ${currentCount}, Status: ${currentStatus}`);
    });
  }
}
