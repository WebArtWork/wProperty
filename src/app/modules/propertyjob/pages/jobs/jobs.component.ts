import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyjobService } from '../../services/propertyjob.service';
import { Propertyjob } from '../../interfaces/propertyjob.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { propertyjobFormComponents } from '../../formcomponents/propertyjob.formcomponents';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { CrudComponent } from 'wacom';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './jobs.component.html',
	styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent extends CrudComponent<
	PropertyjobService,
	Propertyjob,
	FormInterface
> {
	columns = ['name', 'description'];

	config = {
		...this.getConfig(),
	};

	constructor(
		_propertyjobService: PropertyjobService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(propertyjobFormComponents, _form, _translate, _propertyjobService);

		this.setDocuments();
	}
}
