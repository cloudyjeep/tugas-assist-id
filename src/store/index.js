import { createStore } from "redux";
import { useSelector, useDispatch } from "react-redux";
import reducer from "./reducers";
import { setData, setErrorMessage } from "./actions";

export const initState = {
  data: [],
  errorMessage: []
};

// format property field
const fields = {
  name: String,
  gender: String,
  email: String,
  province: String,
  regency: String,
  subDistrict: String,
  urbanVillage: String,
  xyz: true
};

export const store = createStore(reducer, initState);

// setTimeout(() => {
//   console.log({ s: store.getState() });
// }, 3000);

store.subscribe(() => {
  console.log(store.getState());
});

const makeHookStore = (id, action) => () => {
  const dispatch = useDispatch();
  return [useSelector((state) => state[id]), (data) => dispatch(action(data))];
};

export const useData = makeHookStore("data", setData);
export const useErrorMessage = makeHookStore("errorMessage", setErrorMessage);
