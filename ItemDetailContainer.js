import {useState, useEffect} from 'react'
import {getFirestore, doc, getDoc} from 'firebase/firestore'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {
    const[data,setData]= useState('');
    const{detalleId}  = useParams();

    useEffect(()=>{
     const queryDb = getFirestore();
     const queryDoc = doc(queryDb, 'products', '1dfwxjGDtz6Gr4BMF0yX');
    
      },[])
    

  return (
    <div>
        <ItemDetail data ={data} />
    </div>
  )
}

export default ItemDetailContainer