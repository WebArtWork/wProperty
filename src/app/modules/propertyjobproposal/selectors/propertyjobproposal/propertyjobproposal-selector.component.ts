import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { PropertyjobproposalService } from '../../services/propertyjobproposal.service';
import { Propertyjobproposal } from '../../interfaces/propertyjobproposal.interface';

@Component({
	selector: 'propertyjobproposal-selector',
	templateUrl: './propertyjobproposal-selector.component.html',
	styleUrls: ['./propertyjobproposal-selector.component.scss'],
	imports: [SelectModule],
})
export class PropertyjobproposalSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Propertyjobproposal[] {
		return this._propertyjobproposalService.propertyjobproposals;
	}

	constructor(private _propertyjobproposalService: PropertyjobproposalService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
