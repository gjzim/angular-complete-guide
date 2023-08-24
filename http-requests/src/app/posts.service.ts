import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Subject } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    this.http
      .post<{ name: string }>(
        'https://angular-complete-guide-61789-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
        {
          title,
          content,
        }
      )
      .subscribe({
        next: (data) => console.log(data),
        error: (error) => this.error.next(error.message),
      });
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://angular-complete-guide-61789-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            postsArray.push({
              id: key,
              ...responseData[key],
            });
          }
          return postsArray;
        })
      );
  }

  deleteAllPosts() {
    return this.http.delete(
      'https://angular-complete-guide-61789-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
    );
  }
}
