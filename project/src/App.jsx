import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductList } from './components/ProductList'
import { Basket } from './components/Basket'

function App() {
  //const [count, setCount] = useState(0)
  const [basket,setBasket] = useState([])
  const [products, setProducts] = useState([
    {id:101,title:"The Philosophy",price:40,photo:"https://koolskoolbookstore.com/cdn/shop/products/9781405353298-2_1024x1024.jpg?v=1628225241"},
    {id:102,title:"The Philosophy",price:45,photo:"https://sp-uploads.s3.amazonaws.com/uploads/services/3333599/20220319112923_6235be934cbbd_the_philosophy_book__big_ideas_simply_explained__by_dk__will_buckingham__douglas_burnham__peter_j._king__clive_hill__marcus_weeks__john_marenbon__z_lib.org_page0.png"},
    {id:103,title:"The Psychology",price:48,photo:"https://static.periplus.com/sc_7PJBM6UkK1G4oThCsQCI0JQqd1p1wqfcE8s3W.b1nEZpOQd5hW3yW4ZPdWTMdw--"},
    {id:104,title:"The Politics",price:42,photo:"https://static.periplus.com/g_9BIwYSPt1.Ib4_5Sva246BiD1ptCOpewwch_963M_VnPH57DlgaQLx50bUuYANA--"},
    {id:105,title:"The Feminism",price:52,photo:"https://static.periplus.com/uEgX8WERmfHlT6lQXPUYrvXast7Hel1JyDLjIUPI8cHy5v2VswWrTNKi_KzO188jA--"},
    {id:106,title:"The Literature",price:34,photo:"https://static.periplus.com/nNeSUnuFbyFRRjmdWfH9b7khBQ4g7GTxI.YQSgFzIaQJodR_MP20Y9z7ZUhDBR9ow--"},
    {id:107,title:"The Bible book",price:47,photo:"https://static.periplus.com/l3QK4OeWg2DUVMM5y1bYvpyGTID1BUju68l0tJo2Koy9vRVKS_iNh_AYdEbEh_Rpg--"},
    {id:108,title:"The Religions",price:50,photo:"https://static.periplus.com/hpUJO7maoOFQ8zHAiSpGim2ziJwRYpAcrERM2mKThsPvPeDENlukj7BY0epszGKmA--"},
  ])

  const [isSaleVisible,setIsSaleVisible] = useState(false)

  const moveToCart = id =>{
    let found = products.find(x => x.id == id)

    setBasket((prevBasket) => {
      const item = prevBasket.find(i => i.id == id)
        if (item){
          return prevBasket.map(it => it.id == id ? {...it,count :it.count +1, subtotal:( it.count+1)* it.price} :it)

        } else return [...prevBasket,{...found,count :1 , subtotal : found.price}]
      }
    )

    setIsSaleVisible(true)
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
      setIsSaleVisible(newBasket.length != 0)
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


   const handleSale = () => {
    const item = basket.map(i => {
      if (i.count >=3){
        return {...i,subtotal: i.price * (i.count - 1) }
      } return i
    })
    setBasket(item)
    setIsSaleVisible(false)


   }

   

  return (
    <>
     <div className='row'> 
      <ProductList items = {products} onMove={moveToCart} />
      <Basket  items = {basket} onAdd = {addAction} onRemove = {removeItemFromBasket} onDecrease = {decreaseItemFromBasket} onSale = {handleSale} isSaleVisible ={isSaleVisible}/>
     </div>
    </>
  )
}

export default App
