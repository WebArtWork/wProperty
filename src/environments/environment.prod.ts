import { cities } from 'src/app/core/consts/cities.const';

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
	userForm: [
		{
			name: 'Text',
			key: 'position',
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
			key: 'experience',
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
			name: 'String',
			key: 'city',
			fields: [
				{
					name: 'Label',
					value: 'City'
				},
				{
					name: 'Items',
					value: cities
				}
			]
		}
	]
};
