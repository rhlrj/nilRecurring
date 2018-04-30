import { HOME_PAGE_LOADED, HOME_PAGE_UNLOADED } from '../constants/actionTypes';

const defaultState = {
  homePagePosts:[]
}


export default (state = defaultState, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return {
        ...state,
        genre1:action.payload[0],
        homePagePosts:action.payload[1]
        
      };
    case HOME_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
