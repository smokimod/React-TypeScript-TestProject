import React, { FC } from "react";
import { useSelector } from "react-redux";

interface IProps {}

export const UserList: FC<IProps> = (props) => {
    const state=useSelector(state=>state)
  return <div>UserList </div>;
};
