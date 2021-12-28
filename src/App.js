import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';

import HomePage from './pages/HomePage/Hompage.component';

// function HatsPage() {

const HatsPage = props => {
  console.log(props);

  return (
    <div>
      <h1> hats yayy </h1>
      <Link to='/'>go back to home </Link>

      <button onClick={() => window.history.pushState({}, undefined,'/')}> go back to home </button>
      <button onClick={() => console.log(window.history)}> go back to home </button>
    </div>
  )
}

function App() {
  return (
		<div>
			<Routes>
				<Route path='/' element={ <HomePage/>} />
				<Route path="/hats" element={<HatsPage/>} />
			</Routes>
		</div>
  );
}

export default App;
