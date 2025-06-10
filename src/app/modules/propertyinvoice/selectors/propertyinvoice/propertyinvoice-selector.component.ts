import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { PropertyinvoiceService } from '../../services/propertyinvoice.service';
import { Propertyinvoice } from '../../interfaces/propertyinvoice.interface';

@Component({
	selector: 'propertyinvoice-selector',
	templateUrl: './propertyinvoice-selector.component.html',
	styleUrls: ['./propertyinvoice-selector.component.scss'],
	imports: [SelectModule],
})
export class PropertyinvoiceSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Propertyinvoice[] {
		return this._propertyinvoiceService.propertyinvoices;
	}

	constructor(private _propertyinvoiceService: PropertyinvoiceService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
