export const Basketreducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return (state += 1);
    default:
      return state;
  }
};
