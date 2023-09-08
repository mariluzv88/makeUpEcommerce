import  { createContext, useEffect,useState } from 'react'
import axios from 'axios'
export const AppContext = createContext()

const AppContextProvider = (props)=>{
    const [user,setUser] =useState(null)
    const [makeup,setMakeUp]=useState(null)
    const getMakeUp =async ()=>{
        const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=e.l.f.')
        let res = response.data
        console.log(res)
        setMakeUp(res)
    }
    useEffect(()=>{
      getMakeUp()
    },[])
    return(
        <AppContext.Provider value={{makeup,setMakeUp}}>
         {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider