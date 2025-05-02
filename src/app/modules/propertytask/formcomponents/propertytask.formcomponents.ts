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
				value: 'Enter task title',
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
				value: 'Enter a description of the task',
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
				value: 'Enter person responsible',
			  },
			  {
				name: 'Label',
				value: 'Assigned To',
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
				value: 'Enter deadline (e.g. 2025-06-01)',
			  },
			  {
				name: 'Label',
				value: 'Deadline',
			  }
			]
		  }
	]
}
