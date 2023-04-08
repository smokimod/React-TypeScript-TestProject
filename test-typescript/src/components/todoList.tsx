import React, { FC, useEffect } from "react";
import { UseTypeSelector } from "../hooks/useTypeSelector";
import { UseActions } from "../hooks/useAction";

export const TodoList: FC = () => {
  const { error, limit, loading, page, todos } = UseTypeSelector(
    (state) => state.todo
  );
  const { fetchTodos, setTodoPage } = UseActions();
  const num = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
      <div style={{ display: "flex" }}>
        {num.map((p) => (
          <div
            key={Math.random()}
            onClick={() => setTodoPage(p)}
            style={{
              border: p === page ? "2px solid green" : "1px solid grey",
              padding: 10,
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};
