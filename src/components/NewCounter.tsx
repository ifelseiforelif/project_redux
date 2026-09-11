import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const NewCounter = () => {
  const count = useSelector((state: RootState) => {
    return state.counter.value;
  });

  return <>New Counter {count}</>;
};

export { NewCounter };
