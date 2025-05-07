export const propertyrecordFormComponents = {
	formId: 'propertyrecord',
	title: 'Propertyrecord',
	components: [
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
				 'Utility bill','Change owner', 'Service', 'Materials', 'Rent bill', 'Incident'
				]
			  }
			]
		  },
		
		
		
		/*{
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
		  {
			"name": "Text",
			"key": "materials",
			focused: true,
			"fields": [
			  {
				"name": "Placeholder",
				"value": "Enter materials information"
			  },
			  {
				"name": "Label",
				"value": "Materials"
			  }
			]
		  },
		  {
			"name": "Text",
			"key": "photos",
			
			"fields": [
			  {
				"name": "Placeholder",
				"value": "Enter photo URLs or upload"
			  },
			  {
				"name": "Label",
				"value": "Photos"
			  }
			]
		  },
		  {
			"name": "Text",
			"key": "worker",
			
			"fields": [
			  {
				"name": "Placeholder",
				"value": "Enter worker id"
			  },
			  {
				"name": "Label",
				"value": "Worker"
			  }
			]
		  },{
			"name": "Text",
			"key": "seller",
			
			"fields": [
			  {
				"name": "Placeholder",
				"value": "Enter seller id"
			  },
			  {
				"name": "Label",
				"value": "Seller"
			  }
			]
		  },{
			"name": "Text",
			"key": "buyer",
			
			"fields": [
			  {
				"name": "Placeholder",
				"value": "Enter buyer id"
			  },
			  {
				"name": "Label",
				"value": "Buyer"
			  }
			]
		  },
		  {
			"name": "Text",
			"key": "service",
			
			"fields": [
			  {
				"name": "Placeholder",
				"value": "Enter service details"
			  },
			  {
				"name": "Label",
				"value": "Service"
			  }
			]
		  },
		
		  {
			"name": "Number",
			"key": "price",
			
			"fields": [
			  {
				"name": "Placeholder",
				"value": "Enter price amount"
			  },
			  {
				"name": "Label",
				"value": "Price"
			  }
			]
		  },
		  {
			"name": "Text",
			"key": "incident",
			
			"fields": [
			  {
				"name": "Placeholder",
				"value": "Enter incident details"
			  },
			  {
				"name": "Label",
				"value": "Incident"
			  }
			]
		  },
		  {
			"name": "Text",
			"key": "rent",
			"fields": [
			  {
				"name": "Placeholder",
				"value": "Enter rent details"
			  },
			  {
				"name": "Label",
				"value": "Rent"
			  }
			]
		  }
		  

		
	]
};
