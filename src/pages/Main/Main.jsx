import {useContext} from 'react'
import { AppContext } from '../../appContext/App_context'

function Main() {
    let {makeup}=useContext(AppContext)
  return (
    <div>
      <div className='makeUpContainer'>
        {makeup?( makeup.map((products)=>{
            return(
                      <div className='makeUp'>
                      {products.name}
                    {/* <img src={products.image_link}/> */}
                    <img className='img' src={products.api_featured_image}/>
                    </div>
            )
          })):(<p>Loading...</p>)}
          </div>
    </div>
  )
}

export default Main

