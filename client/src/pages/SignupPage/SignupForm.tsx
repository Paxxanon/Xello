import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';

export default function SignupForm() {
  return (
    
    <MDBContainer className="p-3 my-5 d-flex flex-column shadow-lg rounded-3" style={{width: '25%'}}>
      <h2 className="text-center mb-5">Create Account</h2>
      <MDBInput wrapperClass='mb-4' placeholder='Your username' id='form1' type='text'/>
      <MDBInput wrapperClass='mb-4' placeholder='Email address' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4' placeholder='Password' id='form2' type='password'/>
      <MDBInput wrapperClass='mb-4' placeholder='Repeat your password' id='form2' type='password'/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' id='flexCheckDefault'  label='I have indeed read this pointless line' />
        
      </div>

      <MDBBtn className="mb-4">Register</MDBBtn>

     
        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
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

        </div>
      

    </MDBContainer>
    
  )
}
