import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { WorkersComponent } from './workers.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: WorkersComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [WorkersComponent]
})
export class WorkersModule {}
