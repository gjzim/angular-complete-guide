import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, Subject, tap, throwError } from 'rxjs';
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
        },
        {
          observe: 'response',
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
        'https://angular-complete-guide-61789-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
        {
          // params: new HttpParams()
          //   .append('print', 'pretty')
          //   .append('test', 'what'),
          // headers: new HttpHeaders({
          //   'Custom-Header': 'Hello',
          // }),
          responseType: 'json',
        }
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
        }),
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  deleteAllPosts() {
    return this.http
      .delete(
        'https://angular-complete-guide-61789-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
        {
          observe: 'events',
        }
      )
      .pipe(
        tap((event) => {
          console.log(event);
        })
      );
  }
}
