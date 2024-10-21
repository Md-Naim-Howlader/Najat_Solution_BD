import { useState } from "react"
import { Context } from "./Context"


const ContextProvider = ({children}) => {
    const [toggle, setToggle] = useState(false);
    const value = {
        toggle,
        setToggle
    }
  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  )
}

export default ContextProvider