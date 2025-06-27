import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';

export const propertyrecordFormComponents: FormInterface = {
	formId: 'propertyrecord',
	title: 'Propertyrecord',
	components: [
		{
			name: 'Select',
			key: 'type',
			fields: [
				{
					name: 'Placeholder',
					value: 'Select record type'
				},
				{
					name: 'Items',
					value: [
						'Utility bill',
						'Rent bill',
						'Incident',
						'Job',
						'Change owner'
					]
				}
			]
		},
		{
			name: 'Select',
			key: 'materials',
			fields: [
				{
					name: 'Items',
					value: ['', '', '']
				},
				{
					name: 'Placeholder',
					value: 'Enter materials information'
				},
				{
					name: 'Label',
					value: 'Materials'
				}
			]
		},
		{
			name: 'Photos',
			key: 'photos',

			fields: [
				{
					name: 'Placeholder',
					value: 'Enter photo URLs or upload'
				},
				{
					name: 'Label',
					value: 'Photos'
				}
			]
		},
		{
			name: 'Select',
			key: 'worker',

			fields: [
				{
					name: 'Items',
					value: []
				},
				{
					name: 'Placeholder',
					value: 'Select worker'
				},

				{
					name: 'Label',
					value: 'Worker'
				}
			]
		},
		{
			name: 'Select',
			key: 'seller',
			fields: [
				{
					name: 'Items',
					value: []
				},
				{
					name: 'Placeholder',
					value: 'Select seller '
				},

				{
					name: 'Label',
					value: 'Seller'
				}
			]
		},
		{
			name: 'Select',
			key: 'buyer',
			fields: [
				{
					name: 'Items',
					value: []
				},
				{
					name: 'Placeholder',
					value: 'Select buyer'
				},
				{
					name: 'Label',
					value: 'Buyer'
				}
			]
		},
		{
			name: 'Text',
			key: 'service',

			fields: [
				{
					name: 'Placeholder',
					value: 'Enter service details'
				},
				{
					name: 'Label',
					value: 'Service'
				}
			]
		},
		{
			name: 'Number',
			key: 'price',

			fields: [
				{
					name: 'Placeholder',
					value: 'Enter price amount'
				},
				{
					name: 'Label',
					value: 'Price'
				}
			]
		},
		{
			name: 'Text',
			key: 'incident',

			fields: [
				{
					name: 'Placeholder',
					value: 'Enter incident details'
				},
				{
					name: 'Label',
					value: 'Incident'
				}
			]
		},
		{
			name: 'Text',
			key: 'rent',
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter rent details'
				},
				{
					name: 'Label',
					value: 'Rent'
				}
			]
		}
		// {
		// 	name: 'Text',
		// 	key: 'name',
		// 	fields: [
		// 		{
		// 			name: 'Placeholder',
		// 			value: 'Enter record title'
		// 		},
		// 		{
		// 			name: 'Label',
		// 			value: 'Title'
		// 		}
		// 	]
		// },

		// {
		// 	name: 'Text',
		// 	key: 'description',
		// 	fields: [
		// 		{
		// 			name: 'Placeholder',
		// 			value: 'Enter record description'
		// 		},
		// 		{
		// 			name: 'Label',
		// 			value: 'Description'
		// 		}
		// 	]
		// },
		/*

		  {
			"name": "Text",
			"key": "responsible",
			"fields": [
			  {
				"name": "Placeholder",
				"value": "Enter name of responsible person"
			  },
			  {
				"name": "Label",
				"value": "Responsible"
			  }
			]
		  },

		  {
			"name": "Text",
			"key": "comments",
			"fields": [
			  {
				"name": "Placeholder",
				"value": "Enter any additional comments"
			  },
			  {
				"name": "Label",
				"value": "Comments"
			  }
			]
		  },*/
	]
};
