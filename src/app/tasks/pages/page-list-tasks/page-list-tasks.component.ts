import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { State } from 'src/app/core/enums/state';
import { Task } from 'src/app/core/models/task';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-page-list-tasks',
  templateUrl: './page-list-tasks.component.html',
  styleUrls: ['./page-list-tasks.component.scss'],
})
export class PageListTasksComponent implements OnInit {
  public collection!: Task[];

  public states = Object.values(State);

  constructor(private tasksService: TasksService, private router: Router) {
    this.tasksService.collection.subscribe((data) => {
      this.collection = data;
      console.log(data);
    });
  }

  ngOnInit(): void {}

  public changeState(task: Task, event: Event) {
    const target = event.target as HTMLSelectElement;
    const state = target.value as State;
    this.tasksService.changeState(task, state).subscribe((data) => {
      Object.assign(task, data);
    });
  }

  public goToEdit(task: Task) {
    this.router.navigate(['edit', task.id]);
  }

  public hasTasks(state: string) {
    return this.collection.filter(task => task.state === state).length === 0;
  }
}
