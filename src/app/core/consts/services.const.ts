import { Service } from 'src/app/modules/propertyservice/interfaces/propertyservice.interface';

export const services: Service[] = [
	{
		id: 1,
		name: 'Architectural Design',
		description:
			'Architectural Design service in construction or renovation.',
		image: 'architectural-design.png',
		materials: [1, 3, 13, 14],
		units: [
			{
				name: 'Design Drafting',
				use: 1,
				type: 'project'
			}
		]
	},
	{
		id: 2,
		name: 'Demolition',
		description: 'Demolition service in construction or renovation.',
		image: 'demolition.png',
		materials: [1, 25],
		units: [
			{
				name: 'Demolition Work',
				use: 100,
				type: 'm²'
			}
		]
	},
	{
		id: 3,
		name: 'Material Delivery',
		description: 'Material Delivery service in construction or renovation.',
		image: 'material-delivery.png',
		materials: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
			20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
			37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50
		],
		units: [
			{
				name: 'Delivery Volume',
				use: 1,
				type: 'ton'
			}
		]
	},
	{
		id: 4,
		name: 'Land Preparation',
		description: 'Land Preparation service in construction or renovation.',
		image: 'land-preparation.png',
		materials: [3, 4, 13],
		units: [
			{
				name: 'Land Clearing',
				use: 100,
				type: 'm²'
			}
		]
	},
	{
		id: 5,
		name: 'Basement Construction',
		description:
			'Basement Construction service in construction or renovation.',
		image: 'basement-construction.png',
		materials: [14, 13, 18],
		units: [
			{
				name: 'Basement Area',
				use: 50,
				type: 'm²'
			}
		]
	},
	{
		id: 6,
		name: 'Structural Construction',
		description:
			'Structural Construction service in construction or renovation.',
		image: 'structural-construction.png',
		materials: [2, 13, 14],
		units: [
			{
				name: 'Structure Area',
				use: 100,
				type: 'm²'
			}
		]
	},
	{
		id: 7,
		name: 'Roof Installation',
		description: 'Roof Installation service in construction or renovation.',
		image: 'roof-installation.png',
		materials: [7, 48, 25],
		units: [
			{
				name: 'Roofing Area',
				use: 100,
				type: 'm²'
			}
		]
	},
	{
		id: 8,
		name: 'Window & Door Installation',
		description:
			'Window & Door Installation service in construction or renovation.',
		image: 'window-door-installation.png',
		materials: [33, 34, 35, 36],
		units: [
			{
				name: 'Window Installation',
				use: 10,
				type: 'unit'
			},
			{
				name: 'Door Installation',
				use: 5,
				type: 'unit'
			}
		]
	},
	{
		id: 9,
		name: 'Electrical Installation',
		description:
			'Electrical Installation service in construction or renovation.',
		image: 'electrical-installation.png',
		materials: [37, 38],
		units: [
			{
				name: 'Electrical Points',
				use: 20,
				type: 'point'
			}
		]
	},
	{
		id: 10,
		name: 'Smart System Installation',
		description:
			'Smart System Installation service in construction or renovation.',
		image: 'smart-system-installation.png',
		materials: [37, 38],
		units: [
			{
				name: 'Smart Devices',
				use: 5,
				type: 'unit'
			}
		]
	},
	{
		id: 11,
		name: 'Plumbing Installation',
		description:
			'Plumbing Installation service in construction or renovation.',
		image: 'plumbing-installation.png',
		materials: [39, 40, 41],
		units: [
			{
				name: 'Plumbing Points',
				use: 15,
				type: 'point'
			}
		]
	},
	{
		id: 12,
		name: 'Insulation Work',
		description: 'Insulation Work service in construction or renovation.',
		image: 'insulation-work.png',
		materials: [6, 17, 46, 32],
		units: [
			{
				name: 'Insulation Area',
				use: 100,
				type: 'm²'
			}
		]
	},
	{
		id: 13,
		name: 'Floor Base Preparation',
		description:
			'Floor Base Preparation service in construction or renovation.',
		image: 'floor-base-preparation.png',
		materials: [1, 14, 47],
		units: [
			{
				name: 'Floor Base Area',
				use: 100,
				type: 'm²'
			}
		]
	},
	{
		id: 14,
		name: 'Wall Base Preparation',
		description:
			'Wall Base Preparation service in construction or renovation.',
		image: 'wall-base-preparation.png',
		materials: [20, 49],
		units: [
			{
				name: 'Wall Base Area',
				use: 200,
				type: 'm²'
			}
		]
	},
	{
		id: 15,
		name: 'Floor Finishing',
		description: 'Floor Finishing service in construction or renovation.',
		image: 'floor-finishing.png',
		materials: [23, 24, 19],
		units: [
			{
				name: 'Floor Finish',
				use: 100,
				type: 'm²'
			}
		]
	},
	{
		id: 16,
		name: 'Wall Finishing',
		description: 'Wall Finishing service in construction or renovation.',
		image: 'wall-finishing.png',
		materials: [9, 10, 11, 45],
		units: [
			{
				name: 'Wall Finish',
				use: 200,
				type: 'm²'
			}
		]
	},
	{
		id: 17,
		name: 'Ceiling Finishing',
		description: 'Ceiling Finishing service in construction or renovation.',
		image: 'ceiling-finishing.png',
		materials: [8, 31, 30],
		units: [
			{
				name: 'Ceiling Finish',
				use: 100,
				type: 'm²'
			}
		]
	},
	{
		id: 18,
		name: 'Facade Finishing',
		description: 'Facade Finishing service in construction or renovation.',
		image: 'facade-finishing.png',
		materials: [45, 5],
		units: [
			{
				name: 'Facade Finish',
				use: 150,
				type: 'm²'
			}
		]
	},
	{
		id: 19,
		name: 'Furniture Installation',
		description:
			'Furniture Installation service in construction or renovation.',
		image: 'furniture-installation.png',
		materials: [15, 16, 21, 22],
		units: [
			{
				name: 'Furniture Pieces',
				use: 10,
				type: 'unit'
			}
		]
	},
	{
		id: 20,
		name: 'Appliance Installation',
		description:
			'Appliance Installation service in construction or renovation.',
		image: 'appliance-installation.png',
		materials: [44, 42, 43],
		units: [
			{
				name: 'Appliances',
				use: 3,
				type: 'unit'
			}
		]
	},
	{
		id: 21,
		name: 'Landscaping',
		description: 'Landscaping service in construction or renovation.',
		image: 'landscaping.png',
		materials: [],
		units: [
			{
				name: 'Landscaped Area',
				use: 50,
				type: 'm²'
			}
		]
	},
	{
		id: 22,
		name: 'Heating & Cooling Systems',
		description:
			'Heating & Cooling Systems service in construction or renovation.',
		image: 'heating-cooling-systems.png',
		materials: [38, 37],
		units: [
			{
				name: 'HVAC Points',
				use: 5,
				type: 'unit'
			}
		]
	},
	{
		id: 23,
		name: 'Security Systems',
		description: 'Security Systems service in construction or renovation.',
		image: 'security-systems.png',
		materials: [37, 38],
		units: [
			{
				name: 'Security Devices',
				use: 4,
				type: 'unit'
			}
		]
	}
];
