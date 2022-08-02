
const authReducer=(state={authData:null}, action)=>{
    if(action.type==="AUTH"){
       localStorage.setItem('profile',JSON.stringify({...action?.data}));
       return {...state,authData:action?.data};
    }
    else if(action.type==="LOGOUT"){
        localStorage.clear();
        return { ...state, authData: null, loading: false, errors: null };

    }
    else
      return state;

}

export default authReducer;