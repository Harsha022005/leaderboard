// import React from 'react';
// import './App.css'; // Import your CSS file or you can use inline styles

// function App() {
//   return (
//     <div className="App">
//       <header>
//         <div className="logo">
//           <img src="logo.svg" alt="Sololearn Logo" />
//           <h1>sololearn</h1>
//         </div>
//         <nav>
//           <ul>
//             <li><a href="">Courses</a></li>
//             <li><a href="">Leaderboard</a></li>
//             <li><a href="">Code Bits</a></li>
//             <li><a href="">Discuss</a></li>
//             <li><a href="">Blog</a></li>
//             <li><button>Go PRO</button></li>
//           </ul>
//         </nav>
//       </header>

//       <div className="container">
//         <div className="main">
//           <h2>Leaderboard</h2>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import React from 'react'; 
import Leaderboard from './component/Leaderboard';
import Home from './component/Home';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
    <Route exact path={"/"} element={<Home/>}/>
      <Route exact path={"/leaderboard"} element={<Leaderboard/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
