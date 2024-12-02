
import { useState } from 'react'
import './App.css'
import Foods from './Component/Foods/Foods'
import Header from './Component/Header/Header'
import Cover from './Component/MainSection/Cover'
import WantCookCarts from './Component/WantCookCarts/WantCookCarts'
import CurrentlyCookCarts from './Component/CurrentlyCookCarts/CurrentlyCookCarts'

function App() {
  const[wantCook,setWantCook]=useState([])
  const handleWantCook=(wntCook)=>{
    //console.log('handleWantCook is Clicked',wntCook);
    const newWnatCook=[...wantCook,wntCook];
    setWantCook(newWnatCook);
  }
  console.log('wantCook...',wantCook.length);
  
  const[TotalPrice,setTotalPrice]=useState(0);
  const[totalWaitingTime,setTotalWaitingTime]=useState(0);
  const[currentlyCooks,setCurrentlyCooks]=useState([])
  const handlePreparingButton=(prepItem)=>{
    
    // console.log('prepItem..');
    const newCurrentlyCook=[...currentlyCooks,prepItem]
    setCurrentlyCooks(newCurrentlyCook)

    //remove Clicked Want-Cook-Item
    const remainWantCook=wantCook.filter(wntCk=>wntCk.id!==prepItem.id);
    setWantCook(remainWantCook)

    //total waiting time 
    const newTotalWaitTime=totalWaitingTime+(prepItem.time_duration)
    setTotalWaitingTime(newTotalWaitTime)

    //total PRICE
    const newTotalparice=TotalPrice+(prepItem.price)
    setTotalPrice(newTotalparice)
  }
  // console.log('currentlyCooks :___',currentlyCooks.length);
  

  return (
    <>
      
      
      
      <Header></Header>
      <Cover></Cover>
      <div className='md:flex justify-between mx-7'>
        <div className='w-2/3'><Foods handleWantCook={handleWantCook}></Foods></div>
        <div className='w-1/3'>
          <WantCookCarts wantCook={wantCook} handlePreparingButton={handlePreparingButton}></WantCookCarts>
          <CurrentlyCookCarts currentlyCooks={currentlyCooks} totalWaitingTime={totalWaitingTime} TotalPrice={TotalPrice}></CurrentlyCookCarts>
        </div>
      </div>
    

    

  
      
    </>
  )
}

export default App
