import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { ScheduleComponent } from './schedule.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: ScheduleComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [ScheduleComponent]
})
export class ScheduleModule {}
