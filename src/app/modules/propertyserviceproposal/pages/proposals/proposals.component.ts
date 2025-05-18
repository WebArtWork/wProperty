import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyserviceproposalService } from '../../services/propertyserviceproposal.service';
import { Propertyserviceproposal } from '../../interfaces/propertyserviceproposal.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { propertyserviceproposalFormComponents } from '../../formcomponents/propertyserviceproposal.formcomponents';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { CrudComponent } from 'wacom';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './proposals.component.html',
	styleUrls: ['./proposals.component.scss'],
})
export class ProposalsComponent extends CrudComponent<
	PropertyserviceproposalService,
	Propertyserviceproposal,
	FormInterface
> {
	columns = ['name', 'description'];

	config = {
		...this.getConfig(),
	};

	constructor(
		_propertyserviceproposalService: PropertyserviceproposalService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(propertyserviceproposalFormComponents, _form, _translate, _propertyserviceproposalService);

		this.setDocuments();
	}
}
