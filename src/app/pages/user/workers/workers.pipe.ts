import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/modules/user/interfaces/user.interface';

@Pipe({
	name: 'workers'
})
export class WorkersPipe implements PipeTransform {
	transform(
		users: User[],
		service_id: number,
		material_id: number = 0
	): User[] {
		return service_id
			? users?.filter((user) => {
					return ((user.data['services'] as number[]) || []).includes(
						service_id
					);
			  }) || []
			: material_id
			? users?.filter((user) => {
					return ((user.data['material'] as number[]) || []).includes(
						service_id
					);
			  }) || []
			: users;
	}
}
