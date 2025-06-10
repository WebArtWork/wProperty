import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Core
import { GuestComponent } from './core/theme/guest/guest.component';
import { UserComponent } from './core/theme/user/user.component';
import { AppComponent } from './app.component';
import { CoreModule } from 'src/app/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// config
import { WacomModule, MetaGuard } from 'wacom';
import { environment } from 'src/environments/environment';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';
import { GuestGuard } from './core/guards/guest.guard';
import { AdminsGuard } from './core/guards/admins.guard';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HubInfoComponent } from './pages/user/hub-info/hub-info.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/sign',
		pathMatch: 'full'
	},
	{
		path: '',
		canActivate: [GuestGuard],
		component: GuestComponent,
		children: [
			/* guest */
			{
				path: 'sign',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Sign'
					}
				},
				loadChildren: () =>
					import('./pages/guest/sign/sign.module').then(
						(m) => m.SignModule
					)
			}
		]
	},
	{
		path: '',
		canActivate: [AuthenticatedGuard],
		component: UserComponent,
		children: [
			/* user */
			{
				path: 'invoices',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Invoices'
					}
				},
				loadChildren: () => import('./modules/propertyinvoice/pages/invoices/invoices.routes').then(r => r.invoicesRoutes)
			}, 
			{
				path: 'hubInfo',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'HubInfo'
					}
				},
				loadChildren: () =>
					import('./pages/user/hub-info/hub-info.module').then(
						(m) => m.HubInfoModule
					)
			},
			{
				path: 'schedule',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Schedule'
					}
				},
				loadChildren: () =>
					import('./pages/user/schedule/schedule.module').then(
						(m) => m.ScheduleModule
					)
			},
			{
				path: 'hub',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Real Estate Hub'
					}
				},
				loadChildren: () =>
					import('./pages/user/hub/hub.module').then(
						(m) => m.HubModule
					)
			},
			{
				path: 'job',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Job'
					}
				},
				loadChildren: () =>
					import('./pages/user/job/job.module').then(
						(m) => m.JobModule
					)
			},
			{
				path: 'jobs',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Jobs'
					}
				},
				loadChildren: () =>
					import('./pages/user/jobs/jobs.module').then(
						(m) => m.JobsModule
					)
			},
			{
				path: 'jobproposals',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Proposals'
					}
				},
				loadChildren: () =>
					import(
						'./modules/propertyjobproposal/pages/proposals/proposals.routes'
					).then((r) => r.proposalsRoutes)
			},
			{
				path: 'tradeproposals',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Proposals'
					}
				},
				loadChildren: () =>
					import(
						'./modules/propertytradeproposal/pages/proposals/proposals.routes'
					).then((r) => r.proposalsRoutes)
			},
			{
				path: 'portfolios',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Portfolios'
					}
				},
				loadChildren: () =>
					import(
						'./modules/propertyportfolio/pages/portfolios/portfolios.routes'
					).then((r) => r.portfoliosRoutes)
			},
			{
				path: 'material',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Material'
					}
				},
				loadChildren: () =>
					import('./pages/user/material/material.module').then(
						(m) => m.MaterialModule
					)
			},
			{
				path: 'worker',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Worker'
					}
				},
				loadChildren: () =>
					import('./pages/user/worker/worker.module').then(
						(m) => m.WorkerModule
					)
			},
			{
				path: 'service',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Service'
					}
				},
				loadChildren: () =>
					import('./pages/user/service/service.module').then(
						(m) => m.ServiceModule
					)
			},
			{
				path: 'task',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Task'
					}
				},
				loadChildren: () =>
					import('./pages/user/task/task.module').then(
						(m) => m.TaskModule
					)
			},
			{
				path: 'services',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Services'
					}
				},
				loadChildren: () =>
					import('./pages/user/services/services.module').then(
						(m) => m.ServicesModule
					)
			},
			{
				path: 'tasks',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Tasks'
					}
				},
				loadChildren: () =>
					import('./pages/user/tasks/tasks.module').then(
						(m) => m.TasksModule
					)
			},

			{
				path: 'webpropertytasks',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Task'
					}
				},
				loadChildren: () =>
					import(
						'./modules/propertytask/pages/propertiestasks/tasks.module'
					).then((m) => m.TasksModule)
			},
			{
				path: 'propertyhistory',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Propertyhistory'
					}
				},
				loadChildren: () =>
					import(
						'./pages/user/propertyhistory/propertyhistory.module'
					).then((m) => m.PropertyhistoryModule)
			},
			{
				path: 'property',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'My property'
					}
				},
				loadChildren: () =>
					import('./pages/user/myproperty/myproperty.module').then(
						(m) => m.MypropertyModule
					)
			},
			{
				path: 'workers',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Workers'
					}
				},
				loadChildren: () =>
					import('./pages/user/workers/workers.module').then(
						(m) => m.WorkersModule
					)
			},
			{
				path: 'materials',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Materials'
					}
				},
				loadChildren: () =>
					import('./pages/user/materials/materials.module').then(
						(m) => m.MaterialsModule
					)
			},
			{
				path: 'properties',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Myproperties'
					}
				},
				loadChildren: () =>
					import(
						'./pages/user/myproperties/myproperties.module'
					).then((m) => m.MypropertiesModule)
			},
			{
				path: 'propertiesrecords',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Propertiesrecords'
					}
				},
				loadChildren: () =>
					import(
						'./modules/propertyrecord/pages/propertiesrecords/propertiesrecords.module'
					).then((m) => m.PropertiesrecordsModule)
			},
			{
				path: 'propertiestrades',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Propertiestrades'
					}
				},
				loadChildren: () =>
					import(
						'./modules/propertytrade/pages/propertiestrades/propertiestrades.module'
					).then((m) => m.PropertiestradesModule)
			},
			{
				path: 'properties',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Properties'
					}
				},
				loadChildren: () =>
					import(
						'./modules/property/pages/properties/properties.module'
					).then((m) => m.PropertiesModule)
			},
			{
				path: 'records',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Records'
					}
				},
				loadChildren: () =>
					import('./pages/user/records/records.module').then(
						(m) => m.RecordsModule
					)
			},
			{
				path: 'profile',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'My Profile'
					}
				},
				loadChildren: () =>
					import('./pages/user/profile/profile.module').then(
						(m) => m.ProfileModule
					)
			}
		]
	},
	{
		path: 'admin',
		canActivate: [AdminsGuard],
		component: UserComponent,
		children: [
			/* admin */
			{
				path: 'users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Users'
					}
				},
				loadChildren: () =>
					import('./modules/user/pages/users/users.module').then(
						(m) => m.UsersModule
					)
			},
			{
				path: 'forms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Forms'
					}
				},
				loadChildren: () =>
					import(
						'./modules/customform/pages/customforms/customforms.module'
					).then((m) => m.CustomformsModule)
			},
			{
				path: 'translates',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Translates'
					}
				},
				loadChildren: () =>
					import(
						'./core/modules/translate/pages/translates/translates.module'
					).then((m) => m.TranslatesModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: 'profile',
		pathMatch: 'full'
	}
];

@NgModule({
	declarations: [AppComponent, GuestComponent, UserComponent],
	imports: [
		CoreModule,
		BrowserModule,
		BrowserAnimationsModule,
		WacomModule.forRoot({
			store: {},
			http: {
				url: environment.url
			},
			socket: environment.production,
			meta: {
				useTitleSuffix: true,
				defaults: {
					title: environment.meta.title,
					description: environment.meta.description,
					titleSuffix: ' | ' + environment.meta.title,
					'og:image': environment.meta.icon
				}
			},
			modal: {
				modals: {
					/* modals */
				}
			},
			alert: {
				alerts: {
					/* alerts */
				}
			},
			loader: {
				loaders: {
					/* loaders */
				}
			},
			popup: {
				popups: {
					/* popups */
				}
			}
		}),
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled',
			preloadingStrategy: PreloadAllModules
		})
	],
	providers: [
		/* providers */
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
		AuthenticatedGuard,
		GuestGuard,
		AdminsGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
