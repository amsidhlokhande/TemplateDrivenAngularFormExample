import {Injectable} from '@angular/core';
import {User} from './user';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  // private postUrl = 'http://localhost:8383/UserEnrollRestAPI/users/saveUser'; // externally hosted server
  private postUrl = 'http://localhost:3000/express-server/enroll';  // Internally hosted server
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public enroll(user: User): Observable<User> {
    console.log('Enrolling user with user details :' + user.toString());
    return this.httpClient.post<User>(this.postUrl, user).pipe(catchError((err: HttpErrorResponse) => {
      return throwError(err);
    }));
  }

}
