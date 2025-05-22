import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { PropertytradeproposalService } from '../../services/propertytradeproposal.service';
import { Propertytradeproposal } from '../../interfaces/propertytradeproposal.interface';

@Component({
	selector: 'propertytradeproposal-selector',
	templateUrl: './propertytradeproposal-selector.component.html',
	styleUrls: ['./propertytradeproposal-selector.component.scss'],
	imports: [SelectModule],
})
export class PropertytradeproposalSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Propertytradeproposal[] {
		return this._propertytradeproposalService.propertytradeproposals;
	}

	constructor(private _propertytradeproposalService: PropertytradeproposalService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
