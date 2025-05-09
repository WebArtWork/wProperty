import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { TasksComponent } from './tasks.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps'; // Додано GoogleMapsModule

const routes: Routes = [
  {
    path: '',
    component: TasksComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CoreModule,
    CommonModule, // Додано CommonModule
    GoogleMapsModule // Додано GoogleMapsModule
  ],
  declarations: [TasksComponent]
})
export class TasksModule {}
