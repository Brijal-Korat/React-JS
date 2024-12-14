import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [record, setRecord] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !email || !password) {
            alert("Please fill all the fields..!");
        }

        let obj = {
            id: Math.floor(Math.random() * 10000),
            name: name,
            email: email,
            password: password
        }

        let old = [...record, obj];
        localStorage.setItem("users", JSON.stringify(old));
        alert("User successfully registered..!");
        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <div align="center">
            <h2>Register User</h2>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tr>
                        <td>Name :-</td>
                        <td>
                            <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                        </td>
                    </tr>
                    <tr>
                        <td>Email :-</td>
                        <td>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </td>
                    </tr>
                    <tr>
                        <td>Password :-</td>
                        <td>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
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
            <br />
            <Link to={`/login`}>Login</Link>
        </div>
    )
}
export default Register