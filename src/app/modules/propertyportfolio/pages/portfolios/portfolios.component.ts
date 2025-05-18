import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyportfolioService } from '../../services/propertyportfolio.service';
import { Propertyportfolio } from '../../interfaces/propertyportfolio.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { propertyportfolioFormComponents } from '../../formcomponents/propertyportfolio.formcomponents';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { CrudComponent } from 'wacom';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './portfolios.component.html',
	styleUrls: ['./portfolios.component.scss'],
})
export class PortfoliosComponent extends CrudComponent<
	PropertyportfolioService,
	Propertyportfolio,
	FormInterface
> {
	columns = ['name', 'description'];

	config = {
		...this.getConfig(),
	};

	constructor(
		_propertyportfolioService: PropertyportfolioService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(propertyportfolioFormComponents, _form, _translate, _propertyportfolioService);

		this.setDocuments();
	}
}
