import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { LeadsComponent } from './leads.component';
import { Routes, RouterModule } from '@angular/router';
import { TabComponent } from 'src/app/core/modules/tab/tab.component';

const routes: Routes = [
	{
		path: '',
		component: LeadsComponent
	},
	{
		path: ':property_id',
		component: LeadsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule, TabComponent],
	declarations: [LeadsComponent]
})
export class LeadsModule {}
