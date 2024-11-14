// src/project/project.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectService {
  private projects = [];  // In-memory array for storing projects (replace with a database in production)

  create(createProjectDto: CreateProjectDto) {
    const newProject = {
      id: this.projects.length + 1,  // Auto-incrementing ID for simplicity
      ...createProjectDto,
    };
    this.projects.push(newProject);
    return newProject;
  }

  findAll() {
    return this.projects;
  }

  findOne(id: number) {
    const project = this.projects.find((proj) => proj.id === id);
    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    return project;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    const projectIndex = this.projects.findIndex((proj) => proj.id === id);
    if (projectIndex === -1) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    this.projects[projectIndex] = { ...this.projects[projectIndex], ...updateProjectDto };
    return this.projects[projectIndex];
  }

  remove(id: number) {
    const projectIndex = this.projects.findIndex((proj) => proj.id === id);
    if (projectIndex === -1) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    const removedProject = this.projects.splice(projectIndex, 1);
    return removedProject;
  }
}
