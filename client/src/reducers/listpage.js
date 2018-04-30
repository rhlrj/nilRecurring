
import {
  LIST_PAGE_LOADED,
  LIST_PAGE_UNLOADED
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case LIST_PAGE_LOADED:
    console.log(action.payload);
      return {
        ...state,
       articles: action.payload.articles,
       articlesCount: action.payload.articlesCount,
        currentPage: 0
      };
    case LIST_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
