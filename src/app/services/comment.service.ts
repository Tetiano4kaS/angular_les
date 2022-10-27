import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../configs";
import {CommentInterface} from "../interfaces/comment.interface";

@Injectable({providedIn: 'root'})

export class CommentService {
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<CommentInterface[]> {
    return this.httpClient.get<CommentInterface[]>(urls.comments)
  }
}
