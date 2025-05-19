import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WacomModule } from 'wacom';
import { ButtonModule } from 'src/app/core/modules/button/button.module';
import { InputModule } from 'src/app/core/modules/input/input.module';
import { CardModule } from 'src/app/core/modules/card/card.module';
import { TableModule } from './modules/table/table.module';
import { IconsModule } from './icons/icons.module';
import { TranslateModule } from './modules/translate/translate.module';
import { FormcomponentsModule } from './formcomponents/formcomponents.module';
import { SelectModule } from './modules/select/select.module';
import { FormModule } from './modules/form/form.module';
/* imports */
import { ProfileComponent } from './components/profile.component';
import { WorkerComponent } from './components/worker/worker.component';
import { ServiceComponent } from './components/service/service.component';
import { MaterialComponent } from './components/material/material.component';

const components: Type<any>[] = [
	/* components */
	ProfileComponent,
	WorkerComponent,
	ServiceComponent,
	MaterialComponent
];

const selectors: Type<any>[] = [
	/* selectors */
];

const pipes: Type<any>[] = [
	/* pipes */
];

@NgModule({
	declarations: components.concat(selectors).concat(pipes),
	exports: [
		TranslateModule,
		SelectModule,
		CommonModule,
		FormsModule,
		WacomModule,
		ButtonModule,
		InputModule,
		CardModule,
		FormModule,
		TableModule,
		IconsModule
	]
		.concat(components)
		.concat(selectors)
		.concat(pipes),
	imports: [
		FormcomponentsModule,
		TranslateModule,
		SelectModule,
		CommonModule,
		FormsModule,
		WacomModule
	]
})
export class CoreModule {}
