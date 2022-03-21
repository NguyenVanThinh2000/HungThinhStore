import Context from "./Context";
import { useContext } from "react";

export function useUser() {
  const [state, dispatch] = useContext(Context);

  return [state, dispatch];
}
