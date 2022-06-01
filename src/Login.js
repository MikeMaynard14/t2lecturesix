import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  return (
    <div>
       <form>
            <h1>Sign In to FakeBook</h1>
            <p>You life belongs to us!</p>
            <input name="username" type="username" placeholder='Your Username' />
            <input name="password" type="password" placeholder='YourPassword' />     
            <button type="submit">I am ready to waste my life!</button>
        </form>
    </div>
  )
}

export default Login
