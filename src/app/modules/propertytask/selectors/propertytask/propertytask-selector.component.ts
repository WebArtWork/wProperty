import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { PropertytaskService } from '../../services/propertytask.service';
import { Propertytask } from '../../interfaces/propertytask.interface';

@Component({
	selector: 'propertytask-selector',
	templateUrl: './propertytask-selector.component.html',
	styleUrls: ['./propertytask-selector.component.scss'],
	imports: [SelectModule]
})
export class PropertytaskSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Propertytask[] {
		return this._propertytaskService.propertytasks;
	}

	constructor(private _propertytaskService: PropertytaskService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
