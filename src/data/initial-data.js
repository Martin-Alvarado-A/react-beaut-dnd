const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Lorem Ipsum' },
    'task-2': { id: 'task-2', content: 'Voluptatibus magni veritatis' },
    'task-3': {
      id: 'task-3',
      content: 'tempora aut voluptatem temporibus optio totam',
    },
    'task-4': { id: 'task-4', content: 'Velit et iure quaerat sit culpa eum' },
    'task-5': {
      id: 'task-5',
      content: 'Modi sapiente sequi ex in consequuntur',
    },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task5'],
    },
  },
  columnOrder: ['column-1'],
};

export default initialData;
