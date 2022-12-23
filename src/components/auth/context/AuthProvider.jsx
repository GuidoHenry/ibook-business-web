import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext, authReducer } from "./index"

const initialState = {
  logged:false,
}

export const AuthProvider = ({ children }) => {

  const [ authState, dispatch ] = useReducer(authReducer, initialState)
  
  const login = ( name = '' ) => {
    const action = {
      type: types.login,
      payload:{
        id:'ABC',
        name: name
      }

    }
    dispatch(action);
  }

  const logout = () => {
    const action = {
      type: types.logout,
    }
    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{
      authState,
      login,
      logout,
     }}>
      { children }
    </AuthContext.Provider>
  )
}
