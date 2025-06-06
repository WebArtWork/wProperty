import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { HubInfoComponent } from './hub-info.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: HubInfoComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule]
})
export class HubInfoModule {}
