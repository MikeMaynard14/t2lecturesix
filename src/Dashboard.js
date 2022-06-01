import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import PostItem from './components/PostItem'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  return (
    <div className='dash'>
      <h1>Your Timeline</h1>
      <p>Logout</p>
      <p>Lets create a library of cringe</p>
      <div className='posts'>
      
      </div>
      <div className='form'>
        <form>
          <p>Add New Post</p>
            <textarea id='textMes' placeholder='New Post Message' />
            <button type='submit'>Add Post To Timeline</button>
        </form>
      </div>
   
    </div>
  )
}

export default Dashboard
