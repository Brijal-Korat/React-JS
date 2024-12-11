import { signInWithPopup } from "firebase/auth"
import { googleAuthProvider, auth } from "../firebase"

const Login = () => {
  const handleSubmit = async () => {
    try {
      let login = await signInWithPopup(auth, googleAuthProvider)
    } catch (err) {
      console.log("err")
      return false;
    }
  }
  return (
    <div align="center">
      <button onClick={handleSubmit}>
        Sign In
      </button>
    </div>
  )
}

export default Login