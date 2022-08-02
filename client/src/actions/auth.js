import * as api from "../api";

export const signin=(formData,history)=> async(dispatch)=>{
  try {
       //login ka logic and data fetching
       const { data } = await api.signIn(formData);

       dispatch({ type: 'AUTH', data });
       console.log("X");
       history.push('/');

  } catch (error) {
    console.log(error);
  }
}
export const signup=(formData,history)=> async(dispatch)=>{
  try {
       //login ka logic and data fetching
       const { data } = await api.signUp(formData);

       dispatch({ type: 'AUTH', data });
      //  console.log(d);
       history.push('/');

  } catch (error) {
    console.log("error");
  }
}