import React, { FC, useEffect } from "react";
import { UseTypeSelector } from "../hooks/useTypeSelector";
import { UseActions } from "../hooks/useAction";

export const UserList: FC = () => {
  const { error, loading, users } = UseTypeSelector((state) => state.user);
  const { fetchUsers } = UseActions();

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
