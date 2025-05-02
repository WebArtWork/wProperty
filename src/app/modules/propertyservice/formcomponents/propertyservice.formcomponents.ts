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
				value: 'Enter service title',
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
				value: 'Enter a brief description of the service',
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
				value: 'Specify the service offered',
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
				value: 'Enter the price for the service',
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
				value: 'Enter contact details (email or phone)',
			  },
			  {
				name: 'Label',
				value: 'Contact',
			  }
			]
		  }
	]
}
