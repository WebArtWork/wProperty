export const propertymaterialFormComponents = {
	formId: 'propertymaterial',
	title: 'Propertymaterial',
	components: [
		{
			"name": "Text",
			"key": "name",
			"focused": true,
			"fields": [
			  {
				"name": "Placeholder",
				"value": "Enter material title"
			  },
			  {
				"name": "Label",
				"value": "Title"
			  }
			]
		  },
		  {
			"name": "Text",
			"key": "description",
			"fields": [
			  {
				"name": "Placeholder",
				"value": "Enter material description"
			  },
			  {
				"name": "Label",
				"value": "Description"
			  }
			]
		  },
		  {
			"name": "Number",
			"key": "quantity",
			"focused": true,
			"fields": [
			  {
				"name": "Placeholder",
				"value": "Enter quantity of material"
			  },
			  {
				"name": "Label",
				"value": "Quantity"
			  }
			]
		  },
		  {
			"name": "Text",
			"key": "supplier",
			"focused": true,
			"fields": [
			  {
				"name": "Placeholder",
				"value": "Enter supplier name"
			  },
			  {
				"name": "Label",
				"value": "Supplier"
			  }
			]
		  },
		  {
			"name": "Number",
			"key": "price",
			"focused": true,
			"fields": [
			  {
				"name": "Placeholder",
				"value": "Enter material price"
			  },
			  {
				"name": "Label",
				"value": "Price"
			  }
			]
		  }
	]
}
