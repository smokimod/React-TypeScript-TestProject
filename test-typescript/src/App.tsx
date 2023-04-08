import React from "react";

import { UserList } from "./components/userList";
import { TodoList } from "./components/todoList";

export const App = () => {
  return (
    <div>
      <UserList />
      <hr />
      <TodoList />
    </div>
  );
};
