import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginParameters } from '@app/core/models/interfaces/ilogin-parameters';
import { IRegisterParameters } from '@app/core/models/interfaces/iregister-parameters';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.apiBaseUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  async login( value: ILoginParameters): Promise<any> {
    try {
      const body = JSON.stringify(value);
      const url = `${this.baseUrl}/login`;
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      const result = await this.httpClient.post(url, body, { headers }).toPromise() as any;
      localStorage.setItem('authToken', result.data.token);
      return result;
    } catch (err) {
      throw err;
    }
  }

  async register( value: IRegisterParameters): Promise<any> {
    try {
      const body = JSON.stringify(value);
      const url = `${this.baseUrl}/register`;
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      const result = await this.httpClient.post(url, body, { headers }).toPromise() as any;
      localStorage.setItem('authToken', result.data.token);
      return result;
    } catch (err) {
      throw err;
    }
  }

  async assignLesson(value: any): Promise<any> {
    try {
      const body = JSON.stringify(value);
      const url = `${this.baseUrl}/assign-lesson`;
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      const result = await this.httpClient.post(url, body, { headers }).toPromise() as any;
      localStorage.setItem('authToken', result.data.token);
      return result;
    } catch (err) {
      throw err;
    }
  }

  async getUserLessons(): Promise<any> {
    try {
      const url = `${this.baseUrl}${'/users-lessons'}`;
      const result = await this.httpClient.get(url).toPromise() as any;
      return result;
    } catch (err) {
      throw err;
    }
  }
}
