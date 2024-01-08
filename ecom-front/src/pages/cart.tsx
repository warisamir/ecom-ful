import { useState,useEffect } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from '../components/cart-item';
import { Link } from "react-router-dom";

const cartItems=[
  {
    productId:"Assdfd",
    photo:'https://m.media-amazon.com/images/I/71TPda7cwUL._SX522_.jpg',
    name:"Macbook",
    price:'3000',
    quantity:4,
    stock:40
  }
];
const subtotal=4000;
const tax=Math.round((subtotal*0.18));
const shippingCharges=200;
const discount=400;
const total=subtotal+tax+shippingCharges;
const Cart = () => {
 const [couponCode, setcouponCode] = useState<string>("");
 const [isValidCouponCode, setisValidCouponCode] = useState<boolean>(false);
useEffect(() => {
  const timeOutId=setTimeout(()=>{
    if(Math.random()>0.5)setisValidCouponCode(true);
    else setisValidCouponCode(false);
  },1000)
  return () => {
    clearTimeout(timeOutId)
    setisValidCouponCode(false)
  };
}, [couponCode])

  return (
    <div className="cart">
      <main>
        {
          cartItems.length>0 ?(cartItems.map((i,idx)=>(
          <CartItem key= {idx} cartItem={i}/>  
        ))):(<h1>Cart is Empty</h1>)
           }
      </main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>shippingCharges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p> 
          Discount:<em className="red"> - ₹{discount}</em>
        </p>
        <p>
          <b>Total :₹{total}</b>
        </p>
        <input type="text"
        placeholder="coupon Code"
         value={couponCode} onChange={(e) => setcouponCode(e.target.value)}
         />
         {couponCode &&
          (isValidCouponCode ? (
          <span className="green">
            You got ₹{discount} off using the <code>{couponCode}</code></span>
          ):(<span className="red">Invalid Coupon! <VscError/></span>)) }
          
          {
            cartItems.length>0 && <Link to="/shipping">Checkout</Link>
          }
      </aside>
    </div>
  )
}

export default Cart