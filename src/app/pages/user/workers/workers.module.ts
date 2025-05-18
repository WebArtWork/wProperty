import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { WorkersComponent } from './workers.component';
import { Routes, RouterModule } from '@angular/router';
import { WorkersPipe } from './workers.pipe';

const routes: Routes = [
	{
		path: '',
		component: WorkersComponent
	},
	{
		path: 'service/:service_id',
		component: WorkersComponent
	},
	{
		path: 'material/:material_id',
		component: WorkersComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule, WorkersPipe],
	declarations: [WorkersComponent]
})
export class WorkersModule {}
