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
					value: 'Enter task title'
				},
				{
					name: 'Label',
					value: 'Title'
				}
			]
		},
		{
			name: 'Select',
			key: 'category',
			focused: false,
			fields: [
				{
					name: 'Placeholder',
					value: 'Select category (e.g. Repair, Inspection, Cleaning)'
				},
				{
					name: 'Items',
					value: [
						'Repair',
						'Inspection',
						'Cleaning',
						'Maintenance',
						'Painting',
						'Plumbing',
						'Electrical',
						'Landscaping',
						'Security',
						'Pest Control',
						'HVAC',
						'Window Cleaning',
						'Roofing',
						'Flooring',
						'Snow Removal',
						'IT Support',
						'Appliance Repair',
						'Waste Removal',
						'Signage',
						'Furniture Assembly',
						'Lighting'
					]
				}
			]
		},
		{
			name: 'Text',
			key: 'description',
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter a description of the task'
				},
				{
					name: 'Label',
					value: 'Description'
				}
			]
		},
		{
			name: 'Select',
			key: 'assigned',
			fields: [
				{
					name: 'Items',
					value: []
				},
				{
					name: 'Placeholder',
					value: 'Select assigned user'
				},
				{
					name: 'Label',
					value: 'Assigned'
				}
			]
		},

		{
			name: 'Select',
			key: 'client',
			fields: [
				{
					name: 'Items',
					value: []
				},
				{
					name: 'Placeholder',
					value: 'Select client'
				},
				{
					name: 'Label',
					value: 'Client'
				}
			]
		},

		{
			name: 'Text',
			key: 'address',
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter address related to the task'
				},
				{
					name: 'Label',
					value: 'Address'
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
					value: 'Enter deadline (e.g. 2025-06-01)'
				},
				{
					name: 'Label',
					value: 'Deadline'
				}
			]
		},
		{
			name: 'Text',
			key: 'latitude',
			focused: false,
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter latitude (e.g. 50.4501)'
				},
				{
					name: 'Label',
					value: 'Latitude'
				}
			]
		},
		{
			name: 'Text',
			key: 'longitude',
			focused: false,
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter longitude (e.g. 30.5236)'
				},
				{
					name: 'Label',
					value: 'Longitude'
				}
			]
		},
		{
			name: 'Text',
			key: 'startTime',
			focused: false,
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter start time (e.g. 09:00)'
				},
				{
					name: 'Label',
					value: 'Start Time'
				}
			]
		},
		{
			name: 'Text',
			key: 'endTime',
			focused: false,
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter end time (e.g. 17:00)'
				},
				{
					name: 'Label',
					value: 'End Time'
				}
			]
		}
	]
};
