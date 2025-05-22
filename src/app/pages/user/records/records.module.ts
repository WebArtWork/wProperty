import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from '../records/history/history.component';
import { RecordsComponent } from './records.component';

const routes: Routes = [
	{
		path: ':id',
		component: RecordsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [RecordsComponent, HistoryComponent]
})
export class RecordsModule {}
