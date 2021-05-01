import {SET_GROUP_MEMBER} from '../actions/types';

const initialState = {
  groups = {
    group1:[],group2:[]
  },
  gamewords = {
    group1:"",group2:""
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GROUP_MEMBER:
      return { ...state, groups: action.payload };
    default:
      return state;
  }
}


