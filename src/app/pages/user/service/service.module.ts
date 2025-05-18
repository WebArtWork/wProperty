import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { ServiceComponent } from './service.component';
import { Routes, RouterModule } from '@angular/router';
import { WorkersPipe } from '../workers/workers.pipe';

const routes: Routes = [
	{
		path: ':id',
		component: ServiceComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule, WorkersPipe],
	declarations: [ServiceComponent]
})
export class ServiceModule {}
