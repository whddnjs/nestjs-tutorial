import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateTodoDTO } from "./dto/create-todo.dto";
import { UpdateTodoDTO } from "./dto/update-todo.dto";
import { TodoService } from "./todo.service";
import { TodoEntity } from "./entities/todo.entity";

@Controller()
export class TodoController {

  constructor(private readonly todoService: TodoService) { }

  @Get()
  getAll(): TodoEntity[] {
    return this.todoService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') todoId: number): TodoEntity {
    return this.todoService.getOne(todoId);
  }

  @Post()
  create(@Body() todoData: CreateTodoDTO): void {
    return this.todoService.create(todoData);
  }

  @Delete(':id')
  deleteOne(@Param('id') todoId: number): void {
    return this.todoService.deleteOne(todoId);
  }


  @Patch(':id')
  updateOne(@Param('id') todoId: number, @Body() todoData: UpdateTodoDTO): void {
    return this.todoService.updateOne(todoId, todoData);
  }


}