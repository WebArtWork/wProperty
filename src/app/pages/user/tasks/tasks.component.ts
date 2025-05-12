import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/user/services/user.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { GoogleMapsModule } from '@angular/google-maps';  // Імпортуємо Google Maps модуль

interface Task {
  id: number;
  title: string;
  location: {
    lat: number;
    lng: number;
  };
}

@Component({
  standalone: true,  // Оголошуємо компонент як standalone
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  imports: [GoogleMapsModule]  // Імпортуємо Google Maps модуль безпосередньо в компоненті
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
  activeTaskId: number | null = null;

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

  focusOnTask(task: Task): void {
    this.center = task.location;
    this.zoom = 15;
    this.activeTaskId = task.id;
  }

  focusOnMarker(task: Task): void {
    this.center = task.location;
    this.zoom = 15;
    this.activeTaskId = task.id;

    // Прокрутка до відповідної картки
    const el = document.getElementById('task-' + task.id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  getMarkerIcon(task: Task): string {
    return task.id === this.activeTaskId
      ? 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
      : 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
  }

  back(): void {
    window.history.back();
  }

  goToDetails(): void {
    this.router.navigate(['/task']);
  }

  onMapReady(event: any): void {
    console.log('Карта готова!', event);
  }
}
