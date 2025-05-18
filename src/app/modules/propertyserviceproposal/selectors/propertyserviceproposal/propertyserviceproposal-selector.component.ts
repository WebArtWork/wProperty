import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { PropertyserviceproposalService } from '../../services/propertyserviceproposal.service';
import { Propertyserviceproposal } from '../../interfaces/propertyserviceproposal.interface';

@Component({
	selector: 'propertyserviceproposal-selector',
	templateUrl: './propertyserviceproposal-selector.component.html',
	styleUrls: ['./propertyserviceproposal-selector.component.scss'],
	imports: [SelectModule],
})
export class PropertyserviceproposalSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Propertyserviceproposal[] {
		return this._propertyserviceproposalService.propertyserviceproposals;
	}

	constructor(private _propertyserviceproposalService: PropertyserviceproposalService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
