import { cities } from 'src/app/core/consts/cities.const';
import { materials } from 'src/app/core/consts/materials.const';
import { services } from 'src/app/core/consts/services.const';

export const environment = {
	roles: ['propertyworker'],
	production: true,
	appId: 'property',
	url: 'https://webart.work',
	meta: {
		title: 'wProperty - Платформа для управління нерухомістю: продаж, оренда, ремонт, історія обслуговування',
		description:
			"Універсальна платформа для власників нерухомості: додавайте свої об'єкти, продавайте чи здавайте їх в оренду, знаходьте майстрів і послуги для ремонту, купуйте матеріали та зберігайте повну історію обслуговування з фото й деталями.",
		icon: 'https://wproperty.webart.work/assets/seo.png'
	},
	user: {
		email: '',
		password: '',
		resetPin: null
	},
	defaultLanguageCode: 'ua',
	userForm: [
		{
			name: 'Text',
			key: 'data.position',
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter your position'
				},
				{
					name: 'Label',
					value: 'Position'
				}
			]
		},
		{
			name: 'Number',
			key: 'data.experience',
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter your experience'
				},
				{
					name: 'Label',
					value: 'Experience'
				}
			]
		},
		{
			name: 'Select',
			key: 'data.city',
			fields: [
				{
					name: 'Label',
					value: 'City'
				},
				{
					name: 'Placeholder',
					value: 'Fill cities where you are able to take work'
				},
				{
					name: 'Multiple',
					value: true
				},
				{
					name: 'Items',
					value: cities
				}
			]
		},
		{
			name: 'Text',
			key: 'data.area',
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter your city zone or village'
				},
				{
					name: 'Label',
					value: 'Area'
				}
			]
		},
		{
			name: 'Select',
			key: 'data.services',
			fields: [
				{
					name: 'Label',
					value: 'Services'
				},
				{
					name: 'Placeholder',
					value: 'Please fill services with which you are working'
				},
				{
					name: 'Items',
					value: services
				},
				{
					name: 'Multiple',
					value: true
				},
				{
					name: 'Value',
					value: 'id'
				}
			]
		},
		{
			name: 'Select',
			key: 'data.materials',
			fields: [
				{
					name: 'Label',
					value: 'Materials'
				},
				{
					name: 'Placeholder',
					value: 'Please fill material with which you are working'
				},
				{
					name: 'Items',
					value: materials
				},
				{
					name: 'Multiple',
					value: true
				},
				{
					name: 'Value',
					value: 'id'
				}
			]
		}
	]
};
