import { ReplaySubject } from "rxjs";
import "./set-public-path";

export enum Priority {
  HIGH = "High",
  MEDIUM = "Medium",
  LOW = "Low",
}

export type Todo = {
  priority: Priority;
  description: string;
};

export const TodoSubject = new ReplaySubject<Todo>();
TodoSubject.next({ priority: Priority.HIGH, description: "Pre-made 1" });
TodoSubject.next({ priority: Priority.MEDIUM, description: "Pre-made 2" });
