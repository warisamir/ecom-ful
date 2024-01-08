import { ChangeEvent, useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { useNavigate } from "react-router-dom"

const Shipping = () => {
    const navigate= useNavigate();
     const [shippingInfo,setshippingInfo] =useState({
        address:"",
        city:"",
        state:"",
        country:"",
        pinCode: "",
}) 
const changeHandler = (e:ChangeEvent<HTMLInputElement|HTMLSelectElement>)=>{
    setshippingInfo(prev=>({...prev,[e.target.name]:e.target.value}))
} ; 
    
  return (
   
    <div className="shipping" >
        <button className="back-btn" onClick={()=>navigate('/cart')}>
            <BiArrowBack/>
        </button>
    
    <form>
    <h1>Shipping Address</h1>
    <input type="text" required
    placeholder="Addrees" 
    name="address"
    value={shippingInfo.address}
    onChange={changeHandler}
    />
  
    <input type="text" required
    placeholder="City" 
    name="city"
    value={shippingInfo.city}
    onChange={changeHandler}
    />
    <input type="text" required
    placeholder="state" 
    name="state"
    value={shippingInfo.state}
    onChange={changeHandler}
    />
    <select name="country"
     required
      value={shippingInfo.country}
      onChange={changeHandler}
      >
        <option value="">Choose Country</option>
        <option value="india">India</option>
        <option value="tokyo">tokyo</option>
      </select>

    <input required
     type="number"
    placeholder="Pin code" 
    name="pinCode"
    value={shippingInfo.pinCode}
    onChange={changeHandler}
    />
    <button type="submit" >pay Now</button>

    </form>
    </div>
  )
}

export default Shipping