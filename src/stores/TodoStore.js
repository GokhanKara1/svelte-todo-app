import {persistStore} from './persistStore';

const store = [
  {
    id: 1,
    title: 'Making Todo List',
    description: 'A todo list will be made with add, update and delete features',
    isDone: false,
  },
  {
    id: 2,
    title: 'Making Todo List',
    description: 'A todo list will be made with add, update and delete features',
    isDone: false,
  },
  {
    id: 3,
    title: 'Making Todo List',
    description: 'A todo list will be made with add, update and delete features',
    isDone: false,
  },
];

export const TodoStore = persistStore('data',store);;