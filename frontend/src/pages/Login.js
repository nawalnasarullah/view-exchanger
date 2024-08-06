import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit=(e)=>
  {
    e.preventDefault();
  }
  return (
    <div className='d-flex vh-100 justify-content-center align-items-center bg-light mb-3'>
    <div className="container mt-5 p-4 rounded " style={{ backgroundColor: '#D3D3D3', maxWidth: '400px' }}>
      <div className="row justify-content-center">

        <form className="p-3 mt-3 w-100" action={handleSubmit}>
          <h1 className="text-center mb-3 ">Login</h1>
          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className='p-3'>Forget Password?</p>
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
          <p className=' text-center p-3'>Not a member? <strong><a className="text-decoration-none "href="#">Signup</a></strong></p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;