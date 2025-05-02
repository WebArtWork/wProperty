export const propertytradeFormComponents = {
	formId: 'propertytrade',
	title: 'Propertytrade',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
			  {
				name: 'Placeholder',
				value: 'Enter listing title',
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
				value: 'Enter a description of the trade',
			  },
			  {
				name: 'Label',
				value: 'Description',
			  }
			]
		  },
		  {
			name: 'Text',
			key: 'type',
			fields: [
			  {
				name: 'Placeholder',
				value: 'Enter trade type (e.g. sell, buy, exchange)',
			  },
			  {
				name: 'Label',
				value: 'Type',
			  }
			]
		  },
		  {
			name: 'Text',
			key: 'price',
			fields: [
			  {
				name: 'Placeholder',
				value: 'Enter price or estimated value',
			  },
			  {
				name: 'Label',
				value: 'Price',
			  }
			]
		  },
		  {
			name: 'Text',
			key: 'contacts',
			fields: [
			  {
				name: 'Placeholder',
				value: 'Enter contact details (email or phone)',
			  },
			  {
				name: 'Label',
				value: 'Contacts',
			  }
			]
		  },
		  {
			name: 'Text',
			key: 'comments',
			fields: [
			  {
				name: 'Placeholder',
				value: 'Additional notes or comments',
			  },
			  {
				name: 'Label',
				value: 'Comments',
			  }
			]
		  }

	]
}
