import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps'; // Імпортуємо Google Maps модуль
import { TasksComponent } from './tasks.component'; // Імпортуємо standalone компонент
import { CoreModule } from 'src/app/core/core.module';

const routes: Routes = [
	{
		path: '',
		component: TasksComponent // Вказуємо standalone компонент у маршрутах
	}
];

@NgModule({
	imports: [
		CoreModule,
		RouterModule.forChild(routes), // Додавання маршрутизації для цього модуля
		GoogleMapsModule // Додавання модуля Google Maps
	]
})
export class TasksModule {}
