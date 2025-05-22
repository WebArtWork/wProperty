import { Pipe, PipeTransform } from '@angular/core';
import { Material } from 'src/app/core/interfaces/material.interface';

@Pipe({
	name: 'materials'
})
export class MaterialsPipe implements PipeTransform {
	transform(
		materials: Material[],
		search: string,
		service_id: number
	): Material[] {
		return materials;
		// return search || id
		// 	? users?.filter((user) => {
		// 			return ((user.data['services'] as number[]) || []).includes(
		// 				id
		// 			);
		// 	  }) || []
		// 	: users;
	}
}
