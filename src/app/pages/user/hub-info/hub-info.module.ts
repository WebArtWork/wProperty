import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { Routes, RouterModule } from '@angular/router';
import { HubInfoComponent } from './hub-info.component';

const routes: Routes = [
	{
		path: '',
		component: HubInfoComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	exports: [RouterModule]
})
export class HubInfoModule {}
