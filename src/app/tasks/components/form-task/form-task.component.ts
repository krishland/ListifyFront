import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from 'src/app/core/enums/state';
import { Task } from 'src/app/core/models/task';
import { PageEditTaskComponent } from '../../pages/page-edit-task/page-edit-task.component';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.scss'],
})
export class FormTaskComponent implements OnInit {
  public taskForm!: FormGroup;

  public states = Object.values(State);

  @Input() obj!: Task;
  @Input() label!: string;
  @Output() submitted: EventEmitter<Task> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.taskForm = this.fb.group({
      title: [this.obj.title, [Validators.required, Validators.minLength(3)]],
      content: [
        this.obj.content,
        [Validators.required, Validators.minLength(3)],
      ],
      state: [this.obj.state],
      id: [this.obj.id],
    });
  }

  public onSubmit() {
    this.submitted.emit(this.taskForm.value);
  }
}
