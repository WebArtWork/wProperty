import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { MaterialComponent } from './material.component';
import { Routes, RouterModule } from '@angular/router';
import { WorkersPipe } from '../workers/workers.pipe';

const routes: Routes = [
	{
		path: ':id',
		component: MaterialComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule, WorkersPipe],
	declarations: [MaterialComponent]
})
export class MaterialModule {}
