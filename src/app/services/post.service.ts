import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostInterface} from "../interfaces/post.interface";
import {urls} from "../configs";


@Injectable({
  providedIn:'root'
})

export class PostService {
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<PostInterface[]> {
    return this.httpClient.get<PostInterface[]>(urls.posts)
  }
  getById(): Observable<PostInterface>{
  return this.httpClient.get<PostInterface>(urls.posts)}
}

