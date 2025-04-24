export const propertyrecordFormComponents = {
	formId: 'propertyrecord',
	title: 'Propertyrecord',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill propertyrecord title'
				},
				{
					name: 'Label',
					value: 'Title'
				}
			]
		},
		{
			name: 'Select',
			key: 'type',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill propertyrecord title'
				},
				{
					name: 'Items',
					value: [
						'sell / buy payment',
						'service',
						'materials',
						'rent payment',
						'incident'
					]
				}
			]
		},
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill propertyrecord title'
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
					value: 'fill propertyrecord description'
				},
				{
					name: 'Label',
					value: 'Description'
				}
			]
		},

		

		{
			name: 'Text',
			key: 'responsible',
			fields: [
				{
					name: 'Placeholder',
					value: 'fill propertyrecord responsible'
				},
				{
					name: 'Label',
					value: 'Resposible'
				}
			]
		},

		{
			name: 'Text',
			key: 'comments',
			fields: [
				{
					name: 'Placeholder',
					value: 'fill propertyrecord comments'
				},
				{
					name: 'Label',
					value: 'Comments'
				}
			]
		},

		{
			name: 'Text',
			key: 'expenses',
			fields: [
				{
					name: 'Placeholder',
					value: 'fill propertyrecord expenses'
				},
				{
					name: 'Label',
					value: 'Expenses'
				}
			]
		}

		
	]
};
