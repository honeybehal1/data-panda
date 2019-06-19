const dashBoardReducer= (state={}, action={}) => {
    switch (action.type) {
      case "dashboard":
        return {
          rotating: action.payload
        };
      default:
        return state;
    }
  };

  export default dashBoardReducer