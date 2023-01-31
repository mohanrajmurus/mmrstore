import React,{createContext, useState} from 'react'

export const Context = createContext();

function ContextProvider({children}) {
    const [data, setData] = useState({
      products : [],
      cart : [],
      isCart: false,
      isMenu: true
    })
  return (
    <div>
        <Context.Provider value={{data,setData}} >
            {children}
        </Context.Provider>
    </div>
  )
}

export default ContextProvider