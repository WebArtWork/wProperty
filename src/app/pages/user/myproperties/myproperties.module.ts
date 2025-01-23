import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { MypropertiesComponent } from './myproperties.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: MypropertiesComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [MypropertiesComponent]
})
export class MypropertiesModule {}
