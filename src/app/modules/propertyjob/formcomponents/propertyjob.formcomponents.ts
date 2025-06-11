import { materials } from 'src/app/core/consts/materials.const';
import { services } from 'src/app/core/consts/services.const';

export const propertyjobFormComponents = {
	formId: 'propertyjob',
	title: 'Job',
	class: 'form-job',
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
					value: 'Services',
					class: 'mb-10'
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
							items: services,
						}
					]
				}
			]
		},
		{
			name: 'Objects',
			key: 'materials',
			fields: [
				{
					name: 'Label',
					value: 'Materials'
				},
				{
					name: 'Fields',
					value: [
						{
							placeholder: 'Enter material ...',
							key: 'id',
							label: 'Material',
							type: 'select',
							value: 'id',
							items: materials
						}
					]
				}
			]
		},
		{
			name: 'Objects',
			key: 'units',
			fields: [
				{
					name: 'Label',
					value: 'Units'
				},
				{
					name: 'Fields',
					value: [
						{
							placeholder: 'Enter name ...',
							key: 'name',
							label: 'Name'
						},
						{
							placeholder: 'Enter type ...',
							key: 'type',
							label: 'Type'
						},
						{
							placeholder: 'Enter quantity ...',
							key: 'quantity',
							label: 'Quantity'
						},
						{
							placeholder: 'Enter price ...',
							key: 'price',
							label: 'Price'
						}
					]
				}
			]
		},
		{
			name: 'Select',
			key: 'property',
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter property ...'
				},
				{
					name: 'Items',
					value: []
				}
			]
		}
	]
};
