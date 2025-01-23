import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { ProvidersComponent } from './providers.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: ProvidersComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [ProvidersComponent]
})
export class ProvidersModule {}
