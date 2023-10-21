/* eslint-disable no-console */
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
}
from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks.ts';
import { selectError, setError } from '../../store/errorSlice.ts';
import ErrorMessage from '../../components/ui/ErrorMessage.tsx';
import { registerUser } from '../../services/userService.tsx';

interface userData {
  email: string, 
  username: string, 
  login: string, 
  password: string
}
export default function SignupForm() {
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();

  const [form, setForm] = useState({
    email: '', 
    username: '', 
    login: '', 
    password: '',
    // c onfirmPassword: '',
    // conditionsAccepted: false,
  });
 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.password === '') {
      dispatch(setError("Passwords aren't a match"));
    } else {

      console.log(form);
      const userForm: userData = form; 
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      console.log("For api: ", userForm);
      await registerUser(userForm)
    }

  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "checkbox") {
      setForm({...form, [e.target.id]: e.target.checked});
    } else {

      setForm({ ...form, [e.target.id]: e.target.value });
    }
  }
      // {error !== "" && <ErrorMessage/>}

  return (
    <>
      {error !== "" && <ErrorMessage/>}
      <form  onSubmit={handleSubmit} >
        <MDBContainer  className="p-3 my-5 d-flex flex-column shadow-lg rounded-3" style={{width: '25%'}}>
          <h2 className="text-center mb-5">Create Account</h2>
          
          <MDBInput name='username'  onChange={(handleChange)} wrapperClass='mb-4' placeholder='Your username' id='username' type='text'/>
          <MDBInput name='email' onChange={handleChange} wrapperClass='mb-4' placeholder='Email address' id='email' type='email'/>
          <MDBInput name='password' onChange={handleChange} wrapperClass='mb-4' placeholder='Password' id='password' type='password'/>
          {/* <MDBInput wrapperClass='mb-4' onChange={handleChange} placeholder='Repeat your password' id='confirmPassword' type='password'/>
          <div className="d-flex justify-content-between mx-3 mb-4">
            <MDBCheckbox onChange={handleChange} name='flexCheck' id='conditionsAccepted'  label='I have indeed read this pointless line' />
          </div> */}
          <MDBBtn className="mb-4" type='submit' >Register</MDBBtn>

        
            {/* <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>

            </div> */}
          

        </MDBContainer>
      </form>
    
    </>
    
    
  )
}
