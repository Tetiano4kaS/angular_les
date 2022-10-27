import {Component, Input, OnInit} from '@angular/core';
import {CommentInterface} from "../../interfaces/comment.interface";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
comments:CommentInterface[];

  constructor(private commentService:CommentService) { }

  ngOnInit(): void {
    this.commentService.getAll().subscribe(value => this.comments = value)
  }

}
