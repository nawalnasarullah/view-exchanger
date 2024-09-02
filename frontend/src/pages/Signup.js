import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useRegisterUserMutation } from '../redux/api/authApi';
import { useDispatch } from 'react-redux';

const Signup = () => {

    const [registerUser, { isLoading, error, data }] = useRegisterUserMutation()
 
    const dispatch = useDispatch();

    const[apiMessage, setApiMessage] = useState(null);

    const navigate = useNavigate();


    const { handleChange, handleBlur, handleSubmit, handleReset, errors, touched, values, setFieldValue} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            cPassword: '',
            phoneNumber: '',
            avatar: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid first name').min(3, 'Minimum 3 letters').max(25, 'Maximum 25 letters').required('First Name is required').trim(),
            lastName: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid last name').min(3, 'Minimum 3 letters').max(25, 'Maximum 25 letters').required('Last Name is required').trim(),
            username: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid User name').min(3, 'Minimum 3 letters').max(25, 'Maximum 25 letters').required('User Name is required').trim(),
            email: Yup.string().matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Please enter a valid email').required('Email is required').trim(),
            // password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Minimum eight characters, at least one letter, one number and one special character').required('password is required').trim(),
            password: Yup.string().required('Password is required').trim(),
            // cPassword: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Minimum eight characters, at least one letter, one number and one special character').required('Confirm password is required').trim(),
            cPassword: Yup.string().required('Password is required').trim(),
            // phoneNumber: Yup.string().matches(/^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/, 'Phone number not match 03xx xxxxxxx').required('Phone number is required').trim(),
            phoneNumber: Yup.string().required('Phone number is required').trim(),

        }),
        onSubmit: async values => {
            delete values.cPassword;

            const user = await registerUser(values).unwrap();
            console.log(user);
            if(user){
                setApiMessage(user);
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            }else{
                setApiMessage({
                    success: false,
                    message: 'Something went wrong'
                });
            }
            handleReset();
        },
    });

    const [preview,setPreview]=useState(undefined)

    const handleImgChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setFieldValue('avatar', reader.result);
            setPreview(reader.result)
          }
        } 
        reader.readAsDataURL(e.target.files[0]);
      }

    return (
      <>
    <div className="contact-form py-5">
        <div style={{maxWidth:'900px'}} className="container">
            {apiMessage && (
                <div
                    className={`alert alert-${apiMessage.success ? 'success' : 'danger'}`}
                    role="alert"
                >
                    {apiMessage.message}
                </div>
            )}
            <div className="row">
                <div className="col-lg-12">
                    <div className="contact__form__title d-flex align-items-center justify-content-center mb-4">
                        <h2>Register New User</h2>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="mb-5">
                            <input
                                className="form-control"
                                type="text"
                                name="firstName"
                                value={values.firstName}
                                placeholder="Enter First name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.firstName && touched.firstName && (
                                <div className="text-danger">{errors.firstName}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="mb-5">
                            <input
                                className="form-control"
                                type="text"
                                name="lastName"
                                value={values.lastName}
                                placeholder="Enter Last name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.lastName && touched.lastName && (
                                <div className="text-danger">{errors.lastName}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="mb-5">
                            <input
                                className="form-control"
                                type="text"
                                name="username"
                                value={values.username}
                                placeholder="Enter User name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.username && touched.username && (
                                <div className="text-danger">{errors.username}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="mb-5">
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
                        <div className="mb-5">
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
                    <div className="col-lg-6 col-md-6">
                        <div className="mb-5">
                            <input
                                className="form-control"
                                type="password"
                                name="cPassword"
                                value={values.cPassword}
                                placeholder="Enter Confirm Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.cPassword && touched.cPassword && (
                                <div className="text-danger">{errors.cPassword}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="mb-3">
                            <input
                                className="form-control"
                                type="text"
                                name="phoneNumber"
                                value={values.phoneNumber}
                                placeholder="Enter Your Phone Number"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.phoneNumber && touched.phoneNumber && (
                                <div className="text-danger">{errors.phoneNumber}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="mb-3">
                            <input
                                className="form-control"
                                type="file"
                                name="avatar"
                                onChange={handleImgChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-12 text-center mb-4">
                        <img
                            src={preview || `https://www.w3schools.com/howto/img_avatar.png`}
                            className="mt-3 img-fluid"
                            width={100}
                            alt=""
                        />
                    </div>
                    <div className="col-lg-12 text-center">
                        <button type="submit" className="btn btn-primary mb-3">
                            Sign up
                        </button> <br />
                        <Link to={'/login'} className="text-primary">
                            Already have an Account?
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</>

    );
  };
  export default Signup