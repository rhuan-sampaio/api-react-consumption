import * as types from '../types';

const initialState = {
  clickedButton: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CLICKED_BUTTON_SUCCESS: {
      const newState = { ...state };
      newState.clickedButton = !newState.clickedButton;

      return newState;
    }
    case types.CLICKED_BUTTON_FAILURE: {
      return state;
    }
    case types.CLICKED_BUTTON_REQUEST: {
      return state;
    }
    default: {
      return state;
    }
  }
};
