import { EntityState } from '@datorama/akita';
import { v4 as uuid } from 'uuid';


export enum Filter {
  ALL = 'all',
  COMPLETED = 'completed',
  UNCOMPLETED = 'uncompleted',
}

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodosState extends EntityState<Todo> {
  filter: Filter;
}

export function createInitialTodosState(): TodosState {
  const ids = [ uuid(), uuid(), uuid(), uuid(), uuid(), uuid()];

  return {
    entities: {
      [ids[0]]: {
        id: ids[0],
        title: 'Create a todo form',
        completed: true
      },
      [ids[1]]: {
        id: ids[1],
        title: 'Take a break',
        completed: false
      },
      [ids[2]]: {
        id: ids[2],
        title: 'Take a cup of coffee',
        completed: false
      },
      [ids[3]]: {
        id: ids[3],
        title: 'Talk to friend',
        completed: false
      },
      [ids[4]]: {
        id: ids[4],
        title: 'Take a cup of tea',
        completed: false
      },
      [ids[5]]: {
        id: ids[5],
        title: 'Go home',
        completed: false
      },
    },
    ids: [...ids],
    loading: false,
    filter: Filter.ALL
  };
}
