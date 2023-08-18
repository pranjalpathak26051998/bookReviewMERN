import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import Register from './pages/Register';
import ViewBook from './pages/ViewBook';
import './App.css'
const App = () => {
  return (
    
      <div className="App">
        <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/addbook' element={<AddBook/>} />
        
        <Route path='/viewbook' element={<ViewBook/>} />
      
        </Routes>
        </BrowserRouter>
      </div>
    
  );
};

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Login from './pages/Login';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Switch>
//           <Route path="/login" component={Login} />
//           {/* Add more routes for other pages */}
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Login from './pages/Login';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Switch>
//           <Route path="/login" component={Login} />
//           {/* Add more routes for other pages */}
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
