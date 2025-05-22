export const propertyForSaleFormComponents = {
	formId: 'propertyForSale',
	title: 'Property For Sale',
	components: [
		{
			name: 'Boolean',
			key: 'isForSale',
			fields: [
				{
					name: 'Label',
					value: 'For sale'
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
			name: 'Select',
			key: 'type',
			focused: false,
			fields: [
				{
					name: 'Placeholder',
					value: 'Select category '
				},
				{
					name: 'Items',
					value: [
						'Apartment',
						'House',
						'Office',
						'Penthouse',
						'Studio',
						'Loft',
						'Townhouse',
						'Duplex',
						'Commercial Space',
						'Retail Space',
						'Warehouse',
						'Cottage',
						'Mansion',
						'Room',
						'Dormitory'
					]
				}
			]
		},
		{
			name: 'Select',
			key: 'buildingtype',
			focused: false,
			fields: [
				{
					name: 'Placeholder',
					value: 'Select category '
				},
				{
					name: 'Items',
					value: [
						'Tsar-era Building',
						'Stalinka',
						'Khrushchevka',
						'Czech-style',
						'Dormitory'
					]
				}
			]
		},
		{
			name: 'Number',
			key: 'area',
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
			key: 'floor',
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
			key: 'renovation',
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
					name: 'Items',
					value: [
						'Gas',
						'Electricity',
						'Central Water Supply',
						'Well',
						'Sewerage',
						'Garbage Disposal',
						'Elevator',
						'Internet'
					]
				}
			]
		},
		{
			name: 'Select',
			key: 'nearby',
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
					name: 'Placeholder',
					value: 'Select category'
				}
			]
		},
		{
			name: 'Number',
			key: 'price',
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter property price'
				},
				{
					name: 'Label',
					value: 'Price'
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
