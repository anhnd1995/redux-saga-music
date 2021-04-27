import * as ActionType from "../actions/music-action";

const initialState = {
  loading: false,
  tracks: [],
};

const track = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_LOADING:
      return { ...state, loading: true };
    case ActionType.GET_TRACKS:
      return { ...state, tracks: payload, loading: false };
    // case ActionType.ADD_TO_PLAYLIST:
    //   return {...state}
    // case ActionType.REMOVE_FROM_PLAYLIST:
    //   return {...state}
    default:
      return state;
  }
};

export default track;
