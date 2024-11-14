import { Controller, Post, Body } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async createTask(@Body() createTaskDto: any) {
    return this.taskService.create(createTaskDto);
  }
}
