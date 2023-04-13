import { IsNumber, IsString } from "class-validator";

export class CreateTodoDTO {

  @IsString()
  readonly title: string;

  @IsString()
  readonly content: string;

  @IsNumber()
  readonly user: number;
}