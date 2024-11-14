import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  private tasks = [];

  create(task: any) {
    this.tasks.push(task);
    return task;
  }
}
