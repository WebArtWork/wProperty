import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { MypropertyComponent } from './myproperty.component';

const routes: Routes = [
	{
		path: ':property_id',
		component: MypropertyComponent
	},
	{
		path: ':property_id/:type',
		component: MypropertyComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [MypropertyComponent]
})
export class MypropertyModule {}
