import { VENDORS_FETCH,
  VENDORS_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VENDORS_FETCH:
      return { ...state, error: null, isLoading: true }
    case VENDORS_FETCH_SUCCESS:
      return { ...state, data: action.payload, isLoading: false}
    default:
      return state;
  }
}
