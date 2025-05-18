import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { LeadComponent } from './lead.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: LeadComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [LeadComponent]
})
export class LeadModule {}
