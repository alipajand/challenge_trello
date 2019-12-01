import defaultBoard from '@/plugins/defaults';
import { uuid } from '@/plugins/utils';

export const state = () => ({
  board: defaultBoard
});

export const getters = {
  getTask: (state) => {
    return (id) => {
      for (const column of state.board.columns) {
        for (const task of column.tasks) {
          if (task.id === id) {
            return task;
          }
        }
      }
    };
  }
};

export const mutations = {
  CREATE_TASK(state, { tasks, name }) {
    tasks.push({
      name,
      id: uuid(),
      description: ''
    });
  },
  CREATE_COLUMN(state, { name }) {
    state.board.columns.push({
      name,
      tasks: []
    });
  },
  UPDATE_TASK(state, { task, key, value }) {
    task[key] = value;
  },
  MOVE_TASK(state, { fromTasks, toTasks, fromTaskIndex, toTaskIndex }) {
    const taskToMove = fromTasks.splice(fromTaskIndex, 1)[0];
    toTasks.splice(toTaskIndex, 0, taskToMove);
  },
  MOVE_COLUMN(state, { fromColumnIndex, toColumnIndex }) {
    const columnList = state.board.columns;

    const columnToMove = columnList.splice(fromColumnIndex, 1)[0];
    columnList.splice(toColumnIndex, 0, columnToMove);
  }
};

export const actions = {};
