const reducer = (state = {
  tick: 'init',
  tack: 'init',
  toe: 'init'
}, action) => {
  switch (action.type) {
    case 'TICK':
      return {
        ...state
      };
    default:
      return state
  }
};

export default reducer;