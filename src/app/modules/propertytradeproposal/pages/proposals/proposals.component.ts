import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertytradeproposalService } from '../../services/propertytradeproposal.service';
import { Propertytradeproposal } from '../../interfaces/propertytradeproposal.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { propertytradeproposalFormComponents } from '../../formcomponents/propertytradeproposal.formcomponents';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { CrudComponent } from 'wacom';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './proposals.component.html',
	styleUrls: ['./proposals.component.scss'],
})
export class ProposalsComponent extends CrudComponent<
	PropertytradeproposalService,
	Propertytradeproposal,
	FormInterface
> {
	columns = ['name', 'description'];

	config = {
		...this.getConfig(),
	};

	constructor(
		_propertytradeproposalService: PropertytradeproposalService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(propertytradeproposalFormComponents, _form, _translate, _propertytradeproposalService);

		this.setDocuments();
	}
}
