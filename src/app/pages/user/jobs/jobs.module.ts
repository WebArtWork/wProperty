import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { Routes, RouterModule } from '@angular/router';
import { JobsComponent } from './jobs.component';
import { TabComponent } from 'src/app/core/modules/tab/tab.component';

const routes: Routes = [
	{
		path: '',
		component: JobsComponent
	},
	{
		path: ':property_id',
		component: JobsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule, TabComponent],
	declarations: [JobsComponent]
})
export class JobsModule {}
