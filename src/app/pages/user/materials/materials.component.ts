import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';

@Component({
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss'],
  standalone: false
})
export class MaterialsComponent {
  isMenuOpen = false;

  formDoc: FormInterface | undefined;

  constructor(private _form: FormService) {}

  create(): void {
    if (!this.formDoc) {
      console.warn('formDoc не визначено');
      return;
    }

    this._form.modal(this.formDoc, {
      label: 'Create',
      click: (data: any, close: () => void) => {
        console.log('Submitted data:', data);
        close();
      },
    });
  }
}
