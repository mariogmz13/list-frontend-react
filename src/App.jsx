/* eslint-disable react/jsx-no-undef */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

// import Home from "./pages/home/Home.jsx"
// import Create from "./components/Form/Create.jsx"
// import Edit from "./components/Form/Edit.jsx"

// import ItemForm from './ItemForm.jsx'
// import ItemList from './ItemList.jsx';

import Login from './pages/auth/Login.jsx'
// import Activities from './pages/home/Activities.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/home/Home.jsx';
import Create from './components/Form/Create.jsx';
import Edit from './components/Form/Edit.jsx';
import Register from './pages/auth/Register.jsx';
import Activities from './pages/home/Activities.jsx';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/create" element={<Create />} />
//         <Route path="/edit/:id" element={<Edit />} />
//       </Routes>
//     </Router>
//   );
// }

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/activities" element={
          <PrivateRoute>
          <Activities />
        </PrivateRoute>
        } />
        <Route path="/create" element={
          <PrivateRoute>
          <Create />
        </PrivateRoute>
        } />
        <Route path="/edit/:id" element={
          <PrivateRoute>
            <Edit />
          </PrivateRoute>
        } />
        <Route path="*" element={<Login />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* <Route path="/activities" element={<PrivateRoute><Activities /></PrivateRoute>} /> */}
        {/* <Route path="/activities" element={<Activities />} /> */}
      </Routes>
    </Router>
  );
}

export default App
