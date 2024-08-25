import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLoginUserMutation } from '../redux/api/authApi';
import { useDispatch } from 'react-redux';
import {setUserInfo} from '../redux/features/authSlice';


const Login = () => {

    const [loginUser, {isLoading, error}] = useLoginUserMutation();

    const dispatch = useDispatch();

    const[apiMessage, setApiMessage] = useState(null);

    const navigate = useNavigate();



    const { handleChange, handleBlur, handleSubmit, handleReset, errors, touched, values } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Please enter a valid email').required('Email is required').trim(),
            // password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Minimum eight characters, at least one letter, one number and one special character').required('password is required').trim(),
            password: Yup.string().required('Password is required').trim()

        }),
        onSubmit: async values => {

            const res = await loginUser(values).unwrap();
            // console.log(res);
            
            if(res && res.success == true){
                dispatch(setUserInfo(res));
                navigate('/');
            }else{
                setApiMessage(res);
            }

            
    

        },
    });
    return (
      <>
      <div className="contact-form py-5">
          <div className="container">
              {apiMessage && !apiMessage.success && (
                  <div className="alert alert-danger" role="alert">
                      {apiMessage.message}
                  </div>
              )}
              <div className="row">
                  <div className="col-lg-12">
                      <div className="contact__form__title d-flex align-items-center justify-content-center mb-4">
                          <h2>Login User</h2>
                      </div>
                  </div>
              </div>
              <form onSubmit={handleSubmit}>
                  <div className="row">
                      <div className="col-lg-6 col-md-6">
                          <div className="mb-3">
                              <input
                                  className="form-control"
                                  type="email"
                                  name="email"
                                  value={values.email}
                                  placeholder="Enter Your Email"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                              />
                              {errors.email && touched.email && (
                                  <div className="text-danger">{errors.email}</div>
                              )}
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                          <div className="mb-3">
                              <input
                                  className="form-control"
                                  type="password"
                                  name="password"
                                  value={values.password}
                                  placeholder="Enter Password"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                              />
                              {errors.password && touched.password && (
                                  <div className="text-danger">{errors.password}</div>
                              )}
                          </div>
                      </div>
                      <div className="col-lg-12 text-center mt-4">
                          <button type="submit" className="btn btn-primary mb-3">
                              Log in
                          </button> <br />
                          <Link to="/register" className="text-primary">
                              Don't have an Account?
                          </Link>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </>
  
    )
}


export default Login;