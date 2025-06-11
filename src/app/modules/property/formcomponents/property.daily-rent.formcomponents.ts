export const propertyDailyRentFormComponents = {
	formId: 'propertyDailyRent',
	title: 'Property Daily Rent',
	components: [
		{
			name: 'Boolean',
			key: 'isDailyRent',
			fields: [
				{
					name: 'Label',
					value: 'Daily Rent'
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
			key: 'propertyTypes',
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
			key: 'buildingTypes',
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
			name: 'Select',
			key: 'rooms',
			focused: false,
			fields: [
				{
					name: 'Placeholder',
					value: 'Select number of room'
				},
				{
					name: 'Items',
					value: ['1 room', '2 rooms', '3+ rooms']
				}
			]
		},
		{
			name: 'Select',
			key: 'floors',
			focused: false,
			fields: [
				{
					name: 'Placeholder',
					value: 'Select floor'
				},
				{
					name: 'Items',
					value: [
						'1',
						'2',
						'3',
						'4',
						'5',
						'6',
						'7',
						'8',
						'9',
						'10',
						'11',
						'12',
						'13',
						'14',
						'15'
					]
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
			name: 'Select',
			key: 'pets',
			focused: false,
			fields: [
				{
					name: 'Items',
					value: ['Allowed', 'Not Allowed']
				},

				{
					name: 'Placeholder',
					value: 'Select category'
				}
			]
		},

		{
			name: 'Select',
			key: 'sleepingPlaces',
			focused: false,
			fields: [
				{
					name: 'Items',
					value: ['1', '2', '3', '4', '5+']
				},

				{
					name: 'Placeholder',
					value: 'Select category'
				}
			]
		},

		{
			name: 'Number',
			key: 'pricePerDay',
			fields: [
				{
					name: 'Placeholder',
					value: 'Enter property price per day'
				},
				{
					name: 'Label',
					value: 'Price per day'
				}
			]
		},
		{
			name: 'Photos',
			key: 'thumbs',

			fields: [
				{
					name: 'Label',
					value: 'Upload property photos'
				},
				{
					name: 'Accept',
					value: 'image/*'
				},
				{
					name: 'Multiple',
					value: true
				}
			]
		}
	]
};
