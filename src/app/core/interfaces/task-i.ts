import { State } from "../enums/state";

export interface TaskI {
  title: string;
  content: string;
  state: State;
  id: number;
}
