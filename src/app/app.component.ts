import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersDataComponent } from '../Components/users-data/users-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UserListTask';
}
