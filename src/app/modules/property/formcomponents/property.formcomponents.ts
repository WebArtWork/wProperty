export const propertyFormComponents = {
	formId: 'property',
	title: 'Property',
	components: [
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
