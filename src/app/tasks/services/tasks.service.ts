import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from 'src/app/core/models/task';
import { State } from 'src/app/core/enums/state';
// import {}
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private collection$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(
    []
  );

  private url = environment.urlApi;

  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  public refreshCollection() {
    this.http.get<Task[]>(`${this.url}/tasks`).subscribe((data) => {
      this.collection$.next(data);
    });
  }

  public get collection(): Observable<Task[]> {
    this.refreshCollection();
    return this.collection$;
  }

  public update(obj: Task): Observable<Task> {
    return this.http.put<Task>(`${this.url}/tasks/${obj.id}`, obj).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  public patch(obj: Task): Observable<Task> {
    return this.http.patch<Task>(`${this.url}/tasks/${obj.id}`, obj).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  public changeState(task: Task, state: State): Observable<Task> {
    const obj = new Task(task);
    obj.state = state;
    return this.patch(obj);
  }

  public add(obj: Task): Observable<Task> {
    return this.http.post<Task>(`${this.url}/tasks`, obj);
  }

  public delete(id: number): Observable<Task> {
    return this.http.delete<Task>(`${this.url}/tasks/${id}`).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  public getElementById(id: Number): Observable<Task> {
    return this.http.get<Task>(`${this.url}/tasks/${id}`);
  }
}
