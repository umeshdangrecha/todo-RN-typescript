class Todo {
  title: string;
  id: string;

  constructor(title: string) {
    this.title = title;
    this.id = new Date().toISOString();
  }
}

export default Todo;
