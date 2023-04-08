import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/user";
import axios from "axios";

export const fetchUsers = (): any => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setTimeout(() => {}, 5000);
      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCES,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "Возникла ошибка!",
      });
    }
  };
};
