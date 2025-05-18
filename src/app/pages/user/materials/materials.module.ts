import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { MaterialsComponent } from './materials.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialsPipe } from './materials.pipe';

const routes: Routes = [
	{
		path: '',
		component: MaterialsComponent
	},
	{
		path: ':service_id',
		component: MaterialsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule, MaterialsPipe],
	declarations: [MaterialsComponent]
})
export class MaterialsModule {}
