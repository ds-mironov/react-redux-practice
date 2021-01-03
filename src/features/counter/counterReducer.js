const incremented = "counter/incremented";
const decremented = "counter/decremented";
const toZero = "counter/toZero";
const incrementByAmount = "counter/incrementByAmount";

const localStorageState = +localStorage.getItem("value") || 0;

function counterReducer(state = { value: localStorageState }, action) {
  switch (action.type) {
    case incremented:
      return { value: state.value + 1 };
    case decremented:
      return { value: state.value - 1 };
    case toZero:
      return { value: (state.value = 0) };
    case incrementByAmount:
      return { value: (state.value += action.payload) };
    default:
      return state;
  }
}

export const selectCount = (state) => state.value;

export const types = { incremented, decremented, toZero, incrementByAmount };

export default counterReducer;
