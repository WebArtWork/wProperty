export const propertymaterialFormComponents = {
	formId: 'propertymaterial',
	title: 'Propertymaterial',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill propertymaterial title',
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
					value: 'fill propertymaterial description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		},

		{
			name: 'Number',
			key: 'quantity',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill propertymaterial quantity',
				},
				{
					name: 'Label',
					value: 'Quantity',
				}
			]
		},
		{
			name: 'Text',
			key: 'supplier',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill propertymaterial supplier',
				},
				{
					name: 'Label',
					value: 'Supplier',
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
					value: 'fill propertymaterial price',
				},
				{
					name: 'Label',
					value: 'Price',
				}
			]
		}
	]
}
