import { searchDigimon } from "../../../services/api";
import { addDigimon } from "./actions";

export const addDigimonThunk = (name, setError) => async (dispatch) => {
  if (name.trim() !== "") {
    const { data, status } = await searchDigimon(name);

    if (status === 200) {
      dispatch(addDigimon(data[0]));
    } else {
      setError(true);
    }
  }
};
