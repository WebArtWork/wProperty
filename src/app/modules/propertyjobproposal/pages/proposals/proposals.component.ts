import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyjobproposalService } from '../../services/propertyjobproposal.service';
import { Propertyjobproposal } from '../../interfaces/propertyjobproposal.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { propertyjobproposalFormComponents } from '../../formcomponents/propertyjobproposal.formcomponents';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { CrudComponent } from 'wacom';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './proposals.component.html',
	styleUrls: ['./proposals.component.scss'],
})
export class ProposalsComponent extends CrudComponent<
	PropertyjobproposalService,
	Propertyjobproposal,
	FormInterface
> {
	columns = ['name', 'description'];

	config = {
		...this.getConfig(),
	};

	constructor(
		_propertyjobproposalService: PropertyjobproposalService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(propertyjobproposalFormComponents, _form, _translate, _propertyjobproposalService);

		this.setDocuments();
	}
}
