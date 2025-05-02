export const propertyrecordFormComponents = {
	formId: 'propertyrecord',
	title: 'Propertyrecord',
	components: [
		{
			"name": "Text",
			"key": "name",
			"focused": true,
			"fields": [
			  {
				"name": "Placeholder",
				"value": "Enter record title"
			  },
			  {
				"name": "Label",
				"value": "Title"
			  }
			]
		  },
		  {
			"name": "Select",
			"key": "type",
			"focused": true,
			"fields": [
			  {
				"name": "Placeholder",
				"value": "Select record type"
			  },
			  {
				"name": "Items",
				"value": [
				  "sell / buy payment",
				  "service",
				  "materials",
				  "rent payment",
				  "incident"
				]
			  }
			]
		  },
		  {
			"name": "Text",
			"key": "description",
			"fields": [
			  {
				"name": "Placeholder",
				"value": "Enter record description"
			  },
			  {
				"name": "Label",
				"value": "Description"
			  }
			]
		  },
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
			"name": "Number",
			"key": "expenses",
			"fields": [
			  {
				"name": "Placeholder",
				"value": "Enter expense amount"
			  },
			  {
				"name": "Label",
				"value": "Expenses"
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
		  }

		
	]
};
