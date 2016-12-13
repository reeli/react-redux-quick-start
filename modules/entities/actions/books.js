import { createAction } from 'redux-actions';
import { get }  from '../utilities/request';

const GET_TOP_LIST = 'GET_TOP_LIST';
const GET_TOP_LIST_SUCCESS = 'GET_TOP_LIST_SUCCESS';

const getTopList = () => {
  return {
    type: GET_TOP_LIST
  };
};

const getTopListSuccess = (payload) => {
  return {
    type: GET_TOP_LIST_SUCCESS,
    payload
  }
};

const REQUEST_URL = '//api.douban.com/v2/movie/top250';

export const getTopListAction = () => {
  return (dispatch) => {
    dispatch(getTopList());
    return get(REQUEST_URL).then(response=> {
      dispatch(getTopListSuccess(response))
    })
  }
};

