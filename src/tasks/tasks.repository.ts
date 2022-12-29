import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CustomRepository } from '../typeorm-ex.decorator';

@CustomRepository(Task)
export class TasksRepository extends Repository<Task> {}
