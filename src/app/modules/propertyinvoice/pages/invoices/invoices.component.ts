import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyinvoiceService } from '../../services/propertyinvoice.service';
import { Propertyinvoice } from '../../interfaces/propertyinvoice.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { propertyinvoiceFormComponents } from '../../formcomponents/propertyinvoice.formcomponents';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { CrudComponent } from 'wacom';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './invoices.component.html',
	styleUrls: ['./invoices.component.scss'],
})
export class InvoicesComponent extends CrudComponent<
	PropertyinvoiceService,
	Propertyinvoice,
	FormInterface
> {
	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_propertyinvoiceService: PropertyinvoiceService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(propertyinvoiceFormComponents, _form, _translate, _propertyinvoiceService);

		this.setDocuments();
	}
}
