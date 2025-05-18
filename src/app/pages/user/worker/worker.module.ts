import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { WorkerComponent } from './worker.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: ':_id',
		component: WorkerComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [WorkerComponent]
})
export class WorkerModule {}
