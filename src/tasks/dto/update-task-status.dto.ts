import { IsEnum } from 'class-validator';
import { TaskStatus } from '../tasks.model';

export class UpdateStatusTaskDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
