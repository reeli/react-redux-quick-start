const getTopList = (state, action) => {
  state = state || '';
  switch (action.type) {
    case 'GET_TOP_LIST_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};

export default getTopList;
