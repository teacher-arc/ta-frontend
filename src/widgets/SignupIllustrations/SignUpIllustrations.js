import React from 'react'
import './index.css'
import SignUpIllustration from './../../Assets/LoginSignupIllustration.svg'
import RectangleIllustration from '../RectangleIllustration'

function SignUpIllustrations() {
  return (
    <div className='Signup-images'>
    <img src={SignUpIllustration} alt="React Logo" className='Signup-illustration'/>
    <RectangleIllustration/>
    </div>
  )
}

export default SignUpIllustrations