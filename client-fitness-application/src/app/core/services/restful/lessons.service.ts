import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  baseUrl = environment.apiBaseUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  async getLessons(): Promise<any> {
    try {
      const url = `${this.baseUrl}${'/lessons'}`;
      const result = await this.httpClient.get(url).toPromise() as any;
      return result;
    } catch (err) {
      throw err;
    }
  }
}
