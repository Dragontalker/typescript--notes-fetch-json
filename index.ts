import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
};

axios.get(url).then(response => {
  const todo = response.data;

  const ID = todo.ID;
  const title = todo.Title;
  const finished = todo.finished;

  console.log(`
    To Todo with ID: ${ID}
    Has a title of: ${title}
    Is is finished? ${finished}
  `);
});