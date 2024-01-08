import { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaSearch,FaShoppingBag,FaSignInAlt,FaSignOutAlt , FaUser} from 'react-icons/fa'
const user ={_id:"sdksd",role:""}
const Header = () => {
const [isOpen, setisOpen] = useState<boolean>(false)
const logoutHandler=()=>{
    setisOpen(false)
}
  return (
    <nav className='header'>
        <Link onClick={()=>setisOpen(false)} to={"/"}> HOME</Link>
        <Link onClick={()=>setisOpen(false)} to={"/search"}><FaSearch/></Link>
        <Link onClick={()=>setisOpen(false)} to={"/cart"}><FaShoppingBag/></Link>
        {
        user?._id?(
            <>
            <button onClick={()=>setisOpen((prev)=>!prev)}>
                <FaUser/>
            </button>
            <dialog open={isOpen}>
                <div>{user.role==="admin" && ( 
                    <Link onClick={()=>setisOpen(false)} to={"/admin/dashboard"}>Admin</Link>
                 )}
                 <Link onClick={()=>setisOpen(false)} to="/orders">Orders</Link>
                 <button onClick={logoutHandler}>
                    <FaSignOutAlt/>
                 </button>
                </div>
            </dialog>
            </>
        ):
        <Link to={"/login"}><FaSignInAlt/></Link>
        }
    </nav>
  )
}

export default Header