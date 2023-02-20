import React from 'react'
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <button>
        <Link to="/" >Home</Link>
      </button>
      <a href="http://localhost:3001/about">About</a>
      <button>
        <Link to="/about" >About</Link>
      </button>
      <button>
        <Link to="/login" >Login</Link>
      </button>
    </div>
  )
}
