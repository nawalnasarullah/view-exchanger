import React, { useState } from 'react';
const Signup = () => {
    const [First, setFirst] = useState('');
    const [Last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmPassword] = useState('');
    const [error,setError]=useState('')
    const handleSubmit=(e)=>
    {
      
      if(confirmpassword !==password)
        {
            setError('Password do not match');
         return
        }
        else{setError('')}
    }


    return (
      <div className='d-flex vh-100 justify-content-center align-items-center bg-light mt-5 mb-5'>
      <div className="container  p-4 rounded " style={{ backgroundColor: '#D3D3D3', maxWidth: '400px'  }}>
        <div className="row justify-content-center">
  
          <form className="p-3 mt-3 w-100" onSubmit={handleSubmit}>
            <h1 className="text-center mb-3 ">Signup</h1>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                required
                value={First}
                onChange={(e) => setFirst(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                required
                value={Last}
                onChange={(e) => setLast(e.target.value)}
              />
              
            </div>
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
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              required
              value={confirmpassword}
              onChange={(e) =>setconfirmPassword(e.target.value)}
              
            />
        
          </div>
          
          {error && <div className="alert alert-danger ">{error}</div>}
          <p className=' text-center p-3'>Already a member <strong><a className="text-decoration-none "href="#">Login</a></strong></p>
            <button type="submit" className="btn btn-primary w-100">Signup</button>
        
          </form>
        </div>
      </div>
      </div>
    );
  };
  export default Signup