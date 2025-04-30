import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { ServiceComponent } from './service.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: ServiceComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [ServiceComponent]
})
export class ServiceModule {}
