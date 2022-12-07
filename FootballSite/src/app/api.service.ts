import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { IGames } from './shared/interfaces/games';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadData() {
    return this.httpClient.get<IGames[]>(`${apiUrl}/home`)
  }

  // loadPosts(limit?: number) {
  //   return this.httpClient.get<IPost[]>(`${apiUrl}/posts${limit ? `limit=${limit}` : ``}`)
  // }
}

