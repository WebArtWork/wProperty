import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { MaterialComponent } from './material.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: MaterialComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [MaterialComponent]
})
export class MaterialModule {}
