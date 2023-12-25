import './App.css';
import MovieDashboard from './apps/movie-search-app/MovieDashboard';
import TimerDashboard from './apps/timer-app/TimerDashboard';
import HomePage from './components/home/HomePage';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/timer-app' element={<TimerDashboard />} />
        <Route path='/movie-search-app' element={<MovieDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
