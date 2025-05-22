import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { Routes, RouterModule } from '@angular/router';
import { HubComponent } from './hub.component';

const routes: Routes = [
	{
		path: '',
		component: HubComponent
	},
	{
		path: ':type/:author_id',
		component: HubComponent
	},
	{
		path: ':_type',
		component: HubComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [HubComponent]
})
export class HubModule {}
