import api from "api/interceptor";

class Todo {
  async createTodo(todo) {
    const res = await api.post("/todos", {
      todo: todo,
      isCompleted: false,
    });
    return res;
  }

  async getTodos() {
    const res = await api.get("/todos");
    console.log(res);
    return res;
  }

  async updateTodo(id, todo, isCompleted) {
    const res = await api.put(`/todos/${id}`, {
      todo: todo,
      isCompleted: isCompleted,
    });
    return res;
  }

  async deleteTodo(id) {
    const res = await api.delete(`/todos/${id}`);
    return res;
  }
}

export default new Todo();
