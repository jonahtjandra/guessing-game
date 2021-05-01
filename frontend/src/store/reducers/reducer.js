import { SET_GROUPS } from "../actions/types";

const initialState = {
  groups :{
    group1:[],group2:[]
  },
  gamewords : {
    group1:"",group2:""
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GROUPS:
      return({...state, groups : action.payload});
    default:
      return state;
  }
}


