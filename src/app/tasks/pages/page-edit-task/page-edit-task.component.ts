import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/core/models/task';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-page-edit-task',
  templateUrl: './page-edit-task.component.html',
  styleUrls: ['./page-edit-task.component.scss']
})
export class PageEditTaskComponent implements OnInit {

  public item!: Task;

  constructor(private tasksService: TasksService, private activatedRoute: ActivatedRoute, private router: Router) {
    const id = Number(this.activatedRoute.snapshot.paramMap.get("id"));

    this.tasksService.getElementById(id).subscribe(data =>{
      this.item = data;
    })
   }

  ngOnInit(): void {
  }

  public onEdit(obj: Task){
    this.tasksService.update(obj).subscribe(() =>
    this.router.navigate([""]));
  }
}
