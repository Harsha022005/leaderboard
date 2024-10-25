import React from 'react'
import { Link} from 'react-router-dom'
// import Body from './Body'
const Navbar = () => {
  return (
  <>   
<header>
        <div className="logo">
          <img className='ada' src='image.png' alt="Logo"/>
          <h1>sololearn</h1>
        </div>
        <nav>
          <ul>
            <li><Link to="/leaderboard">Leaderboard</Link></li>
            <li><Link to="/">Courses</Link></li>
            <li><Link to="/">Code Playground</Link></li>
            <li><Link to="/">Discuss</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><button>Go PRO</button></li>
            <li><p>Smith</p></li>
            <li><img src="profile.jpeg" alt="Profile" /></li>
          </ul>
        </nav>
        </header>
  </>
  )
}

export default Navbar
