import { Component, EventEmitter,Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppComponent{
  @Output() loginSuccess: EventEmitter<void> = new EventEmitter<void>();
  username!: string;
  password!: string;
  constructor(private router: Router){
    super();
  }
  login() {
    // Here, you can implement the logic to check the username and password
    // against your authentication system or mock data.
    // For simplicity, let's assume the correct credentials are "admin" for both username and password.
    if (this.username === 'admin' && this.password === 'admin') {
      // Navigate to the dashboard page
      // You can use Angular's Router to navigate to a different page
      // For simplicity, let's assume you're using a variable to track the login status
      // and show/hide the dashboard and contact us components based on it.
      //this.loginSuccess.emit();
      this.isLoggedIn= true;
      console.log(this.isLoggedIn);
      this.router.navigate(['/dashboard']);
    } else {
      // Show an error message or perform other actions for invalid credentials
    }
  }
}
