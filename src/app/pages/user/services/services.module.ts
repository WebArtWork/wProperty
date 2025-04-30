import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { ServicesComponent } from './services.component';
import { Routes, RouterModule } from '@angular/router';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
	{
		path: '',
		component: ServicesComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [ServicesComponent, ServiceComponent]
})
export class ServicesModule {}
