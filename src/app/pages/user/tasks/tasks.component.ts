import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/user/services/user.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { GoogleMapsModule } from '@angular/google-maps'; // Імпортуємо Google Maps модуль
import { PropertytaskService } from 'src/app/modules/propertytask/services/propertytask.service';
import { Propertytask } from 'src/app/modules/propertytask/interfaces/propertytask.interface';

@Component({
	standalone: true, // Оголошуємо компонент як standalone
	selector: 'app-tasks',
	templateUrl: './tasks.component.html',
	styleUrls: ['./tasks.component.scss'],
	imports: [GoogleMapsModule] // Імпортуємо Google Maps модуль безпосередньо в компоненті
})
export class TasksComponent {
	center: google.maps.LatLngLiteral = { lat: 50.4501, lng: 30.5234 };
	zoom = 13;
	tasks: Propertytask[] = [];
	isMenuOpen = false;
	activeTaskId: number | null = null;

	constructor(
		private _taskService: PropertytaskService,
		public userService: UserService,
		private router: Router
	) {
		this._taskService.get().subscribe((tasks) => (this.tasks = tasks));
	}

	focusOnTask(task: Propertytask): void {
		this.center = task.location;
		this.zoom = 15;
		this.activeTaskId = task.id;
	}

	focusOnMarker(task: Propertytask): void {
		console.log(task);

		this.center = task.location;
		this.zoom = 15;
		this.activeTaskId = task.id;

		// Прокрутка до відповідної картки
		const el = document.getElementById('task-' + task.id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	}

	getMarkerIcon(task: Propertytask): string {
		return task.id === this.activeTaskId
			? 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
			: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
	}

	back(): void {
		window.history.back();
	}

	goToDetails(): void {
		this.router.navigate(['/task']);
	}

	onMapReady(event: any): void {
		console.log('Карта готова!', event);
	}
}
