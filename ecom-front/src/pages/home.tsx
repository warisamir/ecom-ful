import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/product-card'

const Home = () => {
  const addtoCartHandler =()=>{

  }
  return (
    <div className='home'>
    <section></section>
    <h1>Latest products
      <Link to="/search" className='findmore'>More</Link>
    </h1>
    <main>
      <ProductCard productId='asdsad' name="macbook" 
       price={2424}
       stock={244}
       handler={addtoCartHandler}
       photo="https://m.media-amazon.com/images/I/71TPda7cwUL._SX522_.jpg"/>
    </main>
    </div>
  )
}

export default Home