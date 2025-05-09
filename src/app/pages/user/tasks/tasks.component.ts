import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/user/services/user.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { FormService } from 'src/app/core/modules/form/form.service';

interface Task {
  id: number;
  title: string;
  location: {
    lat: number;
    lng: number;
  };
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  standalone: false,
})
export class TasksComponent implements OnInit {
  formDoc: FormInterface = this._form.getForm('docForm', {
    formId: 'docForm',
    title: 'Doc form',
    components: [
      {
        name: 'Text',
        key: 'name',
        focused: true,
        fields: [
          { name: 'Placeholder', value: 'Enter your name' },
          { name: 'Label', value: 'Name' }
        ]
      },
      {
        name: 'Text',
        key: 'phone',
        fields: [
          { name: 'Placeholder', value: 'Enter your phone' },
          { name: 'Label', value: 'Phone' }
        ]
      },
      {
        name: 'Text',
        key: 'bio',
        fields: [
          { name: 'Placeholder', value: 'Enter your bio' },
          { name: 'Label', value: 'Bio' },
          { name: 'Textarea', value: true }
        ]
      },
      {
        name: 'Button',
        fields: [
          { name: 'Label', value: "Let's go" },
          { name: 'Submit', value: true }
        ]
      }
    ]
  });

  center: google.maps.LatLngLiteral = { lat: 50.4501, lng: 30.5234 };
  zoom = 13;

  tasks: Task[] = [];
  isMenuOpen = false;

  constructor(
    public userService: UserService,
    private _form: FormService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tasks = [
      { id: 1, title: 'Завдання A', location: { lat: 50.4501, lng: 30.5234 } },
      { id: 2, title: 'Завдання B', location: { lat: 50.4545, lng: 30.5200 } },
      { id: 3, title: 'Завдання C', location: { lat: 50.4489, lng: 30.5270 } }
    ];
  }

  back(): void {
    window.history.back();
  }

  goToDetails(): void {
    this.router.navigate(['/task']);
  }
}
