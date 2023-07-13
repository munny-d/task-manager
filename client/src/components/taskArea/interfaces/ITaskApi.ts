import { Status } from './../../createTaskForm/enums/Status';
import { Priority } from '../../createTaskForm/enums/Priority';

export interface ITaskApi {
  id: string;
  date: string;
  title: string;
  description: string;
  priority: `${Priority}`;
  status: `${Status}`;
}
