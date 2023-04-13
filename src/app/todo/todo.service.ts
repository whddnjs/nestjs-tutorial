import { Injectable } from "@nestjs/common";
import { TodoEntity } from "./entities/todo.entity";
import { CreateTodoDTO } from "./dto/create-todo.dto";
import { UpdateTodoDTO } from "./dto/update-todo.dto";

@Injectable()
export class TodoService {

  private todos: TodoEntity[] = [];

  getAll(): TodoEntity[] {
    return this.todos;
  }

  getOne(todoId: number): TodoEntity {
    return this.todos.find(todo => todo.id === todoId);
  }

  create(todoData: CreateTodoDTO): void {
    this.todos.push({
      id: this.todos.length + 1,
      ...todoData
    })
  }

  deleteOne(todoId: number): void {
    this.todos = this.todos.filter(todo => todo.id !== todoId);
  }

  updateOne(todoId: number, todoData: UpdateTodoDTO): void {
    this.todos = this.todos.map(todo => {
      if (todo.id !== todoId) {
        return todo
      }
      return {
        id: todo.id,
        ...todoData
      }
    })
  }

}