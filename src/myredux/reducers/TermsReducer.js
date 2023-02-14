import * as ActionTypes from 'constants/ActionTypes';

const initialState = {
  skipTerms: false,
};

export default (state = initialState, action) =>  {

  switch (action.type) {
    case ActionTypes.SKIP_TERMS:
      return {
        ...state,
        skipTerms: action.payload
      };
    default:
      return state;
  }
}
