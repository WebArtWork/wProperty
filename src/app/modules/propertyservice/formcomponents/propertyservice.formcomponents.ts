export const propertyserviceFormComponents = {
	formId: 'propertyservice',
	title: 'Propertyservice',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill propertyservice title',
				},
				{
					name: 'Label',
					value: 'Title',
				}
			]
		},
		{
			name: 'Text',
			key: 'description',
			fields: [
				{
					name: 'Placeholder',
					value: 'fill propertyservice description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		},
		{
			name: 'Text',
			key: 'service',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill propertyservice service',
				},
				{
					name: 'Label',
					value: 'Service',
				}
			]
		},
		{
			name: 'Number',
			key: 'price',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill propertyservice price',
				},
				{
					name: 'Label',
					value: 'Price',
				}
			]
		},
		{
			name: 'Text',
			key: 'contact',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill propertyservice contact',
				},
				{
					name: 'Label',
					value: 'Contact',
				}
			]
		}
	]
}
