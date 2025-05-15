import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { propertyworkerFormComponents } from 'src/app/modules/propertyworker/formcomponents/propertyworker.formcomponents';
import { Propertyworker } from 'src/app/modules/propertyworker/interfaces/propertyworker.interface';
import { PropertyworkerService } from 'src/app/modules/propertyworker/services/propertyworker.service';
import { User } from 'src/app/modules/user/interfaces/user.interface';
import { UserService } from 'src/app/modules/user/services/user.service';

@Component({
	templateUrl: './workers.component.html',
	styleUrls: ['./workers.component.scss'],
	standalone: false
})
export class WorkersComponent implements OnInit {
	isMenuOpen = false;
	allWorkers: User[] = [];
	filteredWorkers: User[] = [];

	constructor(
		private _propertyworkerService: PropertyworkerService,
		private _form: FormService,
		private _userService: UserService
	) {}

	ngOnInit(): void {
		this.loadWorkers();
	}

	loadWorkers(): void {
		// Витягуємо всіх користувачів з роллю 'propertyworker'
		const all = this._userService.usersByRole['propertyworker'] || [];
		this.allWorkers = all;
		this.filteredWorkers = [...all]; // Початково без фільтрації
	}

	/** Фільтрація за конкретною роллю */
	filterByRole(role: string | null): void {
		if (!role) {
			this.filteredWorkers = [...this.allWorkers];
			return;
		}

		this.filteredWorkers = this.allWorkers.filter((user) =>
			user.roles.includes(role.toLowerCase())
		);
	}

	/** Створення нового працівника */
	form: FormInterface = this._form.getForm(
		'propertyworker',
		propertyworkerFormComponents
	);

	create(): void {
		this._form.modal<Propertyworker>(this.form, {
			label: 'Create',
			click: async (created: unknown, close: () => void) => {
				close();
				this._preCreate(created as Propertyworker);
				this._propertyworkerService
					.create(created as Propertyworker)
					.subscribe(() => {
						this.loadWorkers();
					});
			}
		});
	}

	private _preCreate(worker: Propertyworker): void {
		delete worker.__created;
	}
}
