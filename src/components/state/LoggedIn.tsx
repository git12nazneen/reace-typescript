import { useState } from "react"

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
const handleLogin = () =>{
    setIsLoggedIn(true)
}
const handleSignUp = () =>{
    setIsLoggedIn(false)
}
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignUp}>SignUp</button>
        <div>User {isLoggedIn? 'Login' : 'Logout'}</div>
    </div>
  )
}
