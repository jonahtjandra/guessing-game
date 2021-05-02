import { SET_GROUPS,SET_ANSWER } from "../actions/types";

const initialState = {
  groups :{
    group1:[],group2:[]
  },
  gamewords : {
    group1:"",group2:""
  },
  correctAnswer:"ILLINOIS"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GROUPS:
      return({...state, groups : action.payload});
    case SET_ANSWER:
        return({...state, correctAnswer : action.payload});
    default:
      return state;
  }
}


