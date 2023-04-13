import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";
import { TodoModule } from "./todo/todo.module";

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'todo',
        module: TodoModule
      }
    ]),
    TodoModule
  ]
})
export class AppRoutingModule { }