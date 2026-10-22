import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly activePage = signal('dashboard');
  protected readonly notificationOpen = signal(false);
  protected readonly selectedRange = signal('Cette semaine');
  protected readonly toast = signal('');

  protected notify(message: string) {
    this.toast.set(message);
    window.setTimeout(() => this.toast.set(''), 3200);
  }

  protected navigate(page: string) {
    this.activePage.set(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
