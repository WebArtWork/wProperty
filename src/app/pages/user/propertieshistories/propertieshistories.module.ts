import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { PropertieshistoriesComponent } from './propertieshistories.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: PropertieshistoriesComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [PropertieshistoriesComponent]
})
export class PropertieshistoriesModule {}
