import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { PropertyjobService } from '../../services/propertyjob.service';
import { Propertyjob } from '../../interfaces/propertyjob.interface';

@Component({
	selector: 'propertyjob-selector',
	templateUrl: './propertyjob-selector.component.html',
	styleUrls: ['./propertyjob-selector.component.scss'],
	imports: [SelectModule],
})
export class PropertyjobSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Propertyjob[] {
		return this._propertyjobService.propertyjobs;
	}

	constructor(private _propertyjobService: PropertyjobService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
