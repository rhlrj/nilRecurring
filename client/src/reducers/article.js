import {
  ARTICLE_PAGE_LOADED,
  ARTICLE_PAGE_UNLOADED,
  TOP_RATED_PAGE_LOADED,
  TOP_RATED_PAGE_UNLOADED,
  ADD_COMMENT,
  DELETE_COMMENT
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
	case TOP_RATED_PAGE_LOADED:
	return {
		...state,
		topRated: action.payload
	};
	case TOP_RATED_PAGE_UNLOADED:
	return {};
    case ARTICLE_PAGE_LOADED:
      return {
        ...state,
        article: action.payload
      };
    case ARTICLE_PAGE_UNLOADED:
      return {};
    case ADD_COMMENT:
      return {
        ...state,
        commentErrors: action.error ? action.payload.errors : null,
        comments: action.error ?
          null :
          (state.comments || []).concat([action.payload.comment])
      };
    case DELETE_COMMENT:
      const commentId = action.commentId
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== commentId)
      };
    default:
      return state;
  }
};
