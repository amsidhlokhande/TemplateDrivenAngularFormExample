import {Component} from '@angular/core';
import {User} from './user';
import {EnrollmentService} from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Java', 'Angular', '.Net', 'Python', 'C#', 'C++'];
  user: User = new User('amsidhlokhande', 'amsidhlokhande@gmail.com', 8108551845, 'Python', 'evening', true);
  topicHasError = false;
  errorMessage = '';
  private enrollmentService: EnrollmentService;
  submitted = false ;

  constructor(enrollmentService: EnrollmentService) {
    this.enrollmentService = enrollmentService;
  }

  registerUser() {
    this.submitted = true;
    console.log(this.user);
    this.enrollmentService.enroll(this.user).subscribe(response => {
      console.log('Success!', response);
    }, error => {
      this.errorMessage = error.statusText;
      console.log('Error!', error);
    });
  }

  validateTopic(value) {
    this.topicHasError = value === 'default';
  }
}
