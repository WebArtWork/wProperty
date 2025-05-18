import { Component, Input } from '@angular/core';
import { User } from 'src/app/modules/user/interfaces/user.interface';

@Component({
	selector: 'core-worker',
	templateUrl: './worker.component.html',
	styleUrls: ['./worker.component.scss'],
	standalone: false
})
export class WorkerComponent {
	@Input() user: User;
}
