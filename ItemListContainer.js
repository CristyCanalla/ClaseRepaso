import {useState, useEffect} from 'react'
import Title from './Title'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const prod=[
  {id:1, 
  image:'https://samsungar.vtexassets.com/arquivos/ids/186569-800-auto?width=800&height=auto&aspect=true',
  title:'Samsung S23',
  price: 75000,
  category:'celulares'
  },

  {id:2, 
  image:'https://samsungar.vtexassets.com/arquivos/ids/176083-800-auto?width=800&height=auto&aspect=true',
  title:'TV Samsung 80" ',
  price: 375000,
  category:'televisores'
  },
//Celular Samsung Galaxy S23 con 2TB de memoria de almcenamiento y 16GB de RAM. 500 megapixeles camara trasera.
  {id:3, 
  image:'https://http2.mlstatic.com/D_NQ_NP_2X_860605-MLA49211284992_022022-F.webp',
  title:'Notebook Samsung 11.6" ',
  price: 275000,
  category:'notebooks'
  },
  
{id:4, 
    image:'https://i.pinimg.com/736x/66/16/41/661641025b358aff6dbdbb72b086af67.jpg',
    title:'Iphone 23',
    price: 375000,
    category:'celulares'
    },

{id:5, 
    image:'https://medias.musimundo.com/medias/00691001-148255-148255-01-148255-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3MzY5MXxpbWFnZS9qcGVnfGg3Zi9oNjEvMTA0NTgwNDYzNjU3MjYvMDA2OTEwMDEtMTQ4MjU1LTE0ODI1NV8wMS0xNDgyNTVfMDEuanBnX3NpemU1MTV8MjY5YjRmMTk3YzliNGM3OGNiYWRhNDM0NDhkYWI0YzNlMmEwZjM1ZmYzNTYzNTYzZTZjNjBjMTkxNDMzNDlmYw',
    title:'TV LG 32" ',
    price: 175000,
    category:'televisores'
    },

  {id:6, 
    image:'https://http2.mlstatic.com/D_NQ_NP_2X_974709-MLA52223092309_102022-F.webp',
    title:'Notebook DELL " ',
    price: 575000,
    category:'notebooks'
    },
];

function ItemListContainer() {
  const[data,setData]= useState([]);
  
  const{categoryId}  = useParams();
  
  useEffect(()=>{
  const getData = new Promise(resolve =>{
    setTimeout(()=>{
     resolve(prod);
    }, 1000);
  });
  if(categoryId){
    getData.then(res => setData(res.filter(prod=> prod.category === categoryId)));
  }else{
    getData.then(res => setData(res));
  }
   

  },[categoryId])
  
  return (
    <div>
      <Title greeting='Enjoy this products!'/>
      <ItemList data ={data} />  
      
    
      
    </div>
  )
}

export default ItemListContainer