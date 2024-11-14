import { IsEnum, IsString, MaxLength } from 'class-validator';

export enum ProjectStatus {
  PLANNED = 'PLANNED',
  ONGOING = 'ONGOING',
  COMPLETED = 'COMPLETED',
}

export class CreateProjectDto {
  @IsString()
  @MaxLength(100)
  name: string;

  @IsString()
  description: string;

  @IsEnum(ProjectStatus)
  status: ProjectStatus;
}
