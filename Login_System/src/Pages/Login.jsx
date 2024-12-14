import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [record, setRecord] = useState(localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []);

  useEffect(() => {
    let loginUser = JSON.parse(localStorage.getItem('registeredUser'));
    if (loginUser) {
      navigate('/add');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill all the fields');
      return;
    }

    let registeredUser = record.filter(
      (val) => val.email === email && val.password === password
    );

    if (registeredUser.length === 0) {
      alert('Email & Password are not valid..!');
    } else {
      localStorage.setItem('registeredUser', JSON.stringify(registeredUser[0]));
      alert('Login successfully completed..!');
      navigate('/add');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div align='center'>
      <h2>Login User</h2>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <tbody>
            <tr>
              <td>Email :-</td>
              <td>
                <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} />
              </td>
            </tr>
            <tr>
              <td>Password :-</td>
              <td>
                <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type='submit' />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <Link to='/'>Register</Link>
    </div>
  );
};
export default Login;