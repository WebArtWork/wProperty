import { NgModule } from '@angular/core';
/* components */
import { PropertyComponent } from './property/property.component';
import { SpiderComponent } from './spider/spider.component';

const icons = [
	/* icons */
	PropertyComponent,
	SpiderComponent
];

@NgModule({
	declarations: icons,
	exports: icons
})
export class IconsModule {}
