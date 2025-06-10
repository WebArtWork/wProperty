import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { JobComponent } from './job.component';

const routes: Routes = [
	{
		path: ':_id',
		component: JobComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule, DatePipe],
	providers: [DatePipe],
	declarations: [JobComponent]
})
export class JobModule {}
