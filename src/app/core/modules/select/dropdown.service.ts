import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectService {
  private openSelectId: number | null = null;

  // Відкрити селект
  openSelect(id: number): void {
    if (this.openSelectId !== id) {
      this.openSelectId = id;
    }
  }

  // Закрити всі селекти
  closeAll(): void {
    this.openSelectId = null;
  }

  // Перевірка, чи відкритий цей селект
  isOpen(id: number): boolean {
    return this.openSelectId === id;
  }
}
