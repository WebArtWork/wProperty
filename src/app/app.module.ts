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
				path: 'components',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Components'
					}
				},
				loadChildren: () =>
					import('./pages/guest/components/components.module').then(
						(m) => m.ComponentsModule
					)
			},
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
				path: 'propertiesrecords',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Propertiesrecords'
					}
				},
				loadChildren: () => import('./modules/propertyrecord/pages/propertiesrecords/propertiesrecords.module').then(m => m.PropertiesrecordsModule)
			}, 
			{
				path: 'propertiestrades',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Propertiestrades'
					}
				},
				loadChildren: () => import('./modules/propertytrade/pages/propertiestrades/propertiestrades.module').then(m => m.PropertiestradesModule)
			}, 
			{
				path: 'propertiesworkers',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Propertiesworkers'
					}
				},
				loadChildren: () => import('./modules/propertyworker/pages/propertiesworkers/propertiesworkers.module').then(m => m.PropertiesworkersModule)
			}, 
			{
				path: 'propertiesservices',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Propertiesservices'
					}
				},
				loadChildren: () => import('./modules/propertyservice/pages/propertiesservices/propertiesservices.module').then(m => m.PropertiesservicesModule)
			}, 
			{
				path: 'propertiesproviders',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Propertiesproviders'
					}
				},
				loadChildren: () => import('./modules/propertyprovider/pages/propertiesproviders/propertiesproviders.module').then(m => m.PropertiesprovidersModule)
			}, 
			{
				path: 'propertiesmaterials',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Propertiesmaterials'
					}
				},
				loadChildren: () => import('./modules/propertymaterial/pages/propertiesmaterials/propertiesmaterials.module').then(m => m.PropertiesmaterialsModule)
			}, 
			{
				path: 'properties',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Properties'
					}
				},
				loadChildren: () => import('./modules/property/pages/properties/properties.module').then(m => m.PropertiesModule)
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
