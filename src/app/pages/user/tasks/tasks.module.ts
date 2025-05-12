import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';  // Імпортуємо Google Maps модуль
import { TasksComponent } from './tasks.component'; // Імпортуємо standalone компонент

const routes: Routes = [
  {
    path: '',
    component: TasksComponent  // Вказуємо standalone компонент у маршрутах
  }
];

@NgModule({
  imports: [
    CommonModule,  // Додавання CommonModule
    RouterModule.forChild(routes),  // Додавання маршрутизації для цього модуля
    GoogleMapsModule  // Додавання модуля Google Maps
  ]
})
export class TasksModule {}
