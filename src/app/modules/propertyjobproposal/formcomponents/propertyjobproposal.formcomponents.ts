import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';

export const propertyjobproposalFormComponents: FormInterface = {
	formId: 'propertyjobproposal',
	title: 'Proposal for job',
	components: [
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
						{ key: 'name' },
						{ key: 'type' },
						{ key: 'use', type: 'number' },
						{ key: 'price', type: 'number' }
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
					value: 'Enter description ...'
				},
				{
					name: 'Label',
					value: 'Description'
				},
				{
					name: 'Textarea',
					value: true
				}
			]
		},
		{
			name: 'Number',
			key: 'price',
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter price ...'
				},
				{
					name: 'Label',
					value: 'Price'
				}
			]
		},
		{
			name: 'Number',
			key: 'workdays',
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter workdays ...'
				},
				{
					name: 'Label',
					value: 'Workdays'
				}
			]
		},
		{
			name: 'Date',
			key: 'start',
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter deadline ...'
				},
				{
					name: 'Label',
					value: 'Deadline'
				}
			]
		},
		{
			name: 'Date',
			key: 'deadline',
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter deadline ...'
				},
				{
					name: 'Label',
					value: 'Deadline'
				}
			]
		}
	]
};
