import { services } from 'src/app/core/consts/services.const';

export const propertyjobFormComponents = {
	formId: 'propertyjob',
	title: 'Job',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter service title'
				},
				{
					name: 'Label',
					value: 'Title'
				}
			]
		},
		{
			name: 'Text',
			key: 'description',
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter a brief description of the service'
				},
				{
					name: 'Label',
					value: 'Description'
				}
			]
		},
		{
			name: 'Objects',
			key: 'services',
			fields: [
				{
					name: 'Label',
					value: 'Service'
				},
				{
					name: 'Fields',
					value: [
						{
							placeholder: 'Enter service ...',
							key: 'id',
							label: 'Service',
							type: 'select',
							value: 'id',
							items: services
						}
					]
				}
			]
		}
	]
};
