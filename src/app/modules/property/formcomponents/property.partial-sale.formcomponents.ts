export const propertyPartialSaleFormComponents = {
	formId: 'propertyPartialSale',
	title: 'Property Partial Sale',
	components: [
		{
			name: 'Boolean',
			key: 'isPartialSale',
			fields: [
				{
					name: 'Label',
					value: 'Partial Sale'
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
					value: 'Enter property title'
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
					value: 'Enter detailed property description'
				},
				{
					name: 'Label',
					value: 'Description'
				}
			]
		},
		{
			name: 'Text',
			key: 'address',
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter property address'
				},
				{
					name: 'Label',
					value: 'Address'
				}
			]
		},
		{
			name: 'Text',
			key: 'propertyTypes',
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter property type (e.g. apartment, house)'
				},
				{
					name: 'Label',
					value: 'Type'
				}
			]
		},
		{
			name: 'Text',
			key: 'buildingTypes',
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter building type (e.g. new building, old stock)'
				},
				{
					name: 'Label',
					value: 'Building Type'
				}
			]
		},
		{
			name: 'Number',
			key: 'areas',
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter property area in sq. m'
				},
				{
					name: 'Label',
					value: 'Area (sq. m)'
				}
			]
		},
		{
			name: 'Number',
			key: 'rooms',
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter number of rooms'
				},
				{
					name: 'Label',
					value: 'Rooms'
				}
			]
		},
		{
			name: 'Number',
			key: 'floors',
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter floor number'
				},
				{
					name: 'Label',
					value: 'Floor'
				}
			]
		},
		{
			name: 'Select',
			key: 'renovations',
			focused: false,
			fields: [
				{
					name: 'Placeholder',
					value: 'Select category '
				},
				{
					name: 'Items',
					value: [
						'Euro Renovation',
						'Cosmetic Repair',
						'Emergency Condition',
						'Newly Built'
					]
				}
			]
		},
		{
			name: 'Select',
			key: 'appliances',
			focused: false,
			fields: [
				{
					name: 'Placeholder',
					value: 'Select category '
				},
				{
					name: 'Multiple',
					value: 'True'
				},
				{
					name: 'Items',
					value: [
						'Furnished',
						'Unfurnished',
						'Electric Kettle',
						'Coffee Machine',
						'Hair Dryer',
						'Stove',
						'Oven',
						'Microwave',
						'Multicooker',
						'Air Conditioner',
						'Bathtub',
						'Shower Cabin',
						'Walk-in Closet',
						'Loggia',
						'Terrace'
					]
				}
			]
		},
		{
			name: 'Select',
			key: 'utilities',
			focused: false,
			fields: [
				{
					name: 'Placeholder',
					value: 'Select category '
				},
				{
					name: 'Multiple',
					value: 'True'
				},
				{
					name: 'Items',
					value: [
						'Gas',
						'Electricity',
						'Central Water Supply',
						'Well',
						'Sewerage',
						'Garbage Disposal',
						'Elevator',
						'Parking',
						'Internet'
					]
				}
			]
		},
		{
			name: 'Select',
			key: 'nearbys',
			focused: false,
			fields: [
				{
					name: 'Items',
					value: [
						'Kindergarten',
						'School',
						'Bus Stop',
						'Metro',
						'Market',
						'Store'
					]
				},
				{
					name: 'Multiple',
					value: 'True'
				},
				{
					name: 'Placeholder',
					value: 'Select category'
				}
			]
		},
		{
			name: 'Number',
			key: 'pricePerPartial',
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter price per partial property'
				},
				{
					name: 'Label',
					value: 'Price per partial property '
				}
			]
		},
		{
			name: 'Photo',
			key: 'thumb',
			fields: [
				{
					name: 'Photo',
					value: 'Upload a property photo'
				}
			]
		}
	]
};
