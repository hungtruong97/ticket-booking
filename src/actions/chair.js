export const setSelectedChair = (chair) => {
  return {
    type: "SELECT_CHAIR",
    payload: chair,
  };
};

export const deleteChair = (chair) => {
  return {
    type: "DELETE_CHAIR",
    payload: chair,
  };
};

export const selectChair = () => {
  return {
    type: "SET_CHAIR",
  };
};
