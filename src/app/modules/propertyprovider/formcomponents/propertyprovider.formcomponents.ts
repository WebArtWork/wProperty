export const propertyproviderFormComponents = {
	formId: 'propertyprovider',
	title: 'Propertyprovider',
	components: [
		{
			name: 'Text',
			key: 'companyname',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter company name'
				},
				{
					name: 'Label',
					value: 'Company Name'
				}
			]
		},
		{
			name: 'Text',
			key: 'contacts',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'Email or phone number'
				},
				{
					name: 'Label',
					value: 'Contact Information'
				}
			]
		},
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
					value: 'Enter service description'
				},
				{
					name: 'Label',
					value: 'Description'
				}
			]
		},
		{
			name: 'Text',
			key: 'servicetype',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'Type of service (e.g. cleaning, repair)'
				},
				{
					name: 'Label',
					value: 'Service Type'
				}
			]
		},
		{
			name: 'Number',
			key: 'experience',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'Years of experience or qualifications'
				},
				{
					name: 'Label',
					value: 'Experience'
				}
			]
		},
		{
			name: 'Number',
			key: 'rating',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'Rating from 1 to 5'
				},
				{
					name: 'Label',
					value: 'Rating'
				}
			]
		}
	]
};
