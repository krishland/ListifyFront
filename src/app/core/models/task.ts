import { State } from "../enums/state";
import { TaskI } from "../interfaces/task-i";

export class Task implements TaskI{
  title!: string;
  content!: string;
  state = State.todo;
  id!: number;
  constructor(obj?: Partial<Task>) {
    if (obj) {
      Object.assign(this, obj);
    }}
}


