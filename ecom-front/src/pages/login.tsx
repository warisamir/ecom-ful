import { useState } from "react"
import { FcGoogle } from "react-icons/fc"
const Login = () => {
    const [gender, setgender] = useState("")
    const [date, setDate] = useState("");
  return (
    <div className="login">
        <main> 
            <h1 className="heading">Login</h1>
            <div>
                <label>Gender</label>
                <select value={gender} onChange={(e) => setgender(e.target.value)}>
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div>
                <label>Date of Birth</label>
               <input 
               type="date"
               value={date}
               onChange={(e)=>setDate(e.target.value)} 
               />
            </div>
            <div>
                <p>Already Signed in Once</p>
                <button>
                    <FcGoogle/><span> Sign in with Google</span>
                </button>
            </div>
        </main>
    </div>
  )
}

export default Login