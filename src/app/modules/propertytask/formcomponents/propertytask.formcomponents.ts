export const propertytaskFormComponents = {
	formId: 'propertytask',
	title: 'Propertytask',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill propertytask title',
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
					value: 'fill propertytask description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		},
		{
			name: 'Text',
			key: 'assigned',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill assigned',
				},
				{
					name: 'Label',
					value: 'Assigned to',
				}
			]
		},
		{
			name: 'Text',
			key: 'deadline',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill deadline',
				},
				{
					name: 'Label',
					value: 'Deadline',
				}
			]
		},
	]
}
