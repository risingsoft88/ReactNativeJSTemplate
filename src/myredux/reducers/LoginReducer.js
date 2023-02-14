import * as ActionTypes from 'constants/ActionTypes';

const initialState = {
  isLogged: false,
};

export default (state = initialState, action) =>  {

  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        ...state,
      };
    default:
      return state;
  }
}
