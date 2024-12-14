import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    useEffect(() => {
        let loginUser = JSON.parse(localStorage.getItem("registeredUser"));
        if (loginUser) {
            navigate("/add");
        }
    })

    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [record, setRecord] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!email || !password) {
            alert("Please fill all the fields");
        }

        let registeredUser = record.filter(
            (val) => val.email == email && val.password == password
        )

        if (registeredUser.length == 0) {
            alert("Email & PassWord are not valid..!");
        }else{
            console.log(registeredUser);
            localStorage.setItem('registeredUser',JSON.stringify(registeredUser[0]));
            alert("Login successfully compeleted..!");
            navigate('/add')
            setEmail("");
            setPassword("");
        }
    }

    return (
        <div>
            <h2>Login User</h2>
            <form onSubmit={handleSubmit}>
                <table border={1} align="center">
                    <tr>
                        <td>Email :-</td>
                        <td>
                            <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Password :-</td>
                        <td>
                            <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="submit" />
                        </td>
                    </tr>
                </table>
            </form>
            <Link to={`/register`}>Register</Link>
        </div>
    )
}
export default Login