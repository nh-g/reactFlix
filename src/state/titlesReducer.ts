//@ts-nocheck
export default function titlesReducer(state, action) {
  switch (action.type) {
    case "CREATE_TITLE":
      return createTitle(state, action);
    case "UPDATE_TITLE":
      return updateTitle(state, action);
    case "SET_DATA":
      return setTitles(action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}
function createTitle(state, action) {
  const { payload } = action;
  return [...state, payload];
}

function updateTitle(state, action) {
  const { payload } = action;
  const newState = [...state];
  const index = newState.findIndex((item) => item.id === payload.id);
  newState[index] = { ...payload };
  return newState;
}

function setTitles(action) {
  const { payload } = action;
  return payload;
}
