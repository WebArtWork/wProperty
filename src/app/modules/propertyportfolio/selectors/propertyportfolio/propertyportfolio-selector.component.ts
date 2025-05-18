import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { PropertyportfolioService } from '../../services/propertyportfolio.service';
import { Propertyportfolio } from '../../interfaces/propertyportfolio.interface';

@Component({
	selector: 'propertyportfolio-selector',
	templateUrl: './propertyportfolio-selector.component.html',
	styleUrls: ['./propertyportfolio-selector.component.scss'],
	imports: [SelectModule],
})
export class PropertyportfolioSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Propertyportfolio[] {
		return this._propertyportfolioService.propertyportfolios;
	}

	constructor(private _propertyportfolioService: PropertyportfolioService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
