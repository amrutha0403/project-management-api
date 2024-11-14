import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';
import { ProjectStatus } from './create-project.dto';

export class UpdateProjectDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(ProjectStatus)
  status?: ProjectStatus;
}
