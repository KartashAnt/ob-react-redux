import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form,Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Navigate } from 'react-router-dom';

const LoginForm = ({loged,fetching,onLogin}) => {
    const initialCredentials={
        email:'',
        password:''
    }
    const loginSchema=Yup.object().shape(
        {
            email: Yup.string().email("Email format invalid").required("Email is required"),
            password: Yup.string().required("Password is required")
        }
    )

    return (
        <div>
            {
                loged?
                <h1>You are loged in</h1>
                :
                    fetching?
                    <span className="loader"></span>
                    :
                    <div>
                        <h4>Login Form</h4>
                        <Formik
                            initialValues={initialCredentials}
                            validationSchema={loginSchema}
                            onSubmit={async (values)=>{
                                onLogin(values.email,values.password);
                            }}  
                        
                        >
                        {
                                ({
                                    values,
                                    touched,
                                    errors,
                                    isSubmitting,
                                    handleChange,
                                    handleBlur
                                }) =>(
                                    <Form>
                                        <label htmlFor="email">Email</label>
                                        <Field
                                        id="email"
                                        name="email"
                                        placeholder="email@example.com"
                                        type="email"
                                        />
                                        {
                                            errors.email && touched.email && 
                                            (
                                                <ErrorMessage name='email' component="div"></ErrorMessage>
                                            )
                                        }
                                        <label htmlFor="password">Password</label>
                                        <Field id="password" name="password" type="password" />
                                        {
                                            errors.password && touched.password && 
                                            (
                                                <ErrorMessage name='password' component="div"></ErrorMessage>
                                            )
                                        }
                                        <button type="submit">Submit</button>
                                        {isSubmitting && <p>Loading your content...</p>}
                                    </Form>
                                )
                        }
                        </Formik>
                    </div>
            }
            
        </div>
    );
};


LoginForm.propTypes = {
    loged: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
};


export default LoginForm;
