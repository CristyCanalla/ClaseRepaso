import {useContext} from 'react'
import { Link } from 'react-router-dom'
import  {useCartContext}  from './CartContext'

function Item({info}) {

 const nombre = useContext(useCartContext);

  return (
    <>
     <Link to={`/detalle/${info.id}`} className='producto'>
        <img src={info.image} width='300px' height='300px' alt='imgitem'/>
     </Link>
    <p>{info.title} </p> 
    </>

  )
}

export default Item