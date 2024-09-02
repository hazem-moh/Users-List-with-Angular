import { Component } from '@angular/core';
import UserData from "../../users.json"
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-data',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './users-data.component.html',
  styleUrl: './users-data.component.css'
})
export class UsersDataComponent {
  users: any = UserData;
  searchTerm: string = '';

  
  filteredUsers() {
    if (!this.searchTerm) {
      return this.users;
    }
    return this.users.filter((user: { email: string; }) => 
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  resetSearch() {
    this.searchTerm = '';
  }
}
