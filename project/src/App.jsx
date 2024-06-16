import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductList } from './components/ProductList'
import { Basket } from './components/Basket'

function App() {
  const [products, setProducts] = useState([])
  
  const [basket,setBasket] = useState([])

  const [total,setTotal] = useState([])
 

  useEffect(() => {
    fetch("http://localhost:3004/books")
    .then(res => res.json())
    .then(res => {
      
      setProducts(res)
    })
   
  },[])


  useEffect(() => {
    setTotal(basket.reduce((a,b) => a+(b.price*b.count),0))
  },[basket])

  

  const moveToCart = id =>{
    let found = products.find(x => x.id == id)

    setBasket((prevBasket) => {
      const item = prevBasket.find(i => i.id == id)
        if (item){
          return prevBasket.map(it => it.id == id ? {...it,count :it.count +1, subtotal:( it.count+1)* it.price} :it)

        } else return [...prevBasket,{...found,count :1 , subtotal : found.price}]
      }
    )

  }

  
  
  const addAction = id => {
    let found = products.find(x => x.id == id)

    setBasket((prevBasket) => {
      const item = prevBasket.find(i => i.id == id)
        if (item){
          return prevBasket.map(it => it.id == id ? {...it,count :it.count +1, subtotal : (it.count + 1)* it.price} :it)

        } else return [...prevBasket,{...found,count :1 , subtotal: found.price}]
      }
    )
    
   }

  
  
   const removeItemFromBasket = id => {
  
    setBasket ((prevBasket) => {
      const newBasket = prevBasket.filter(item => item.id != id)
      
      return newBasket
    })
   }

  
  
   const decreaseItemFromBasket = id => {
    let found = products.find(x => x.id == id)
    setBasket((prevBasket) => {
      const item = prevBasket.find(i => i.id == id)
        if (item){
          return prevBasket.map(it => it.id == id ? {...it,count :it.count>2? it.count-1 : 1 ,
            subtotal:((it.count-1)*it.price)>it.price?(it.count-1)*it.price:it.price} :it)

        } else return [...prevBasket,{...found,count :1,subtotal: found.price}]
      }
    )
  
   }


  return (
    <>
     <div className='row'> 
      <ProductList items = {products} onMove={moveToCart} />
      <Basket  items = {basket} onAdd = {addAction} onRemove = {removeItemFromBasket} onDecrease = {decreaseItemFromBasket} total ={total}  />
     </div>
    </>
  )
}

export default App
