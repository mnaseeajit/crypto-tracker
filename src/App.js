import React,{useState} from "react";
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './components/Pages/home';
import DashbordPage from './components/Pages/dashbordPage';
import CoinPage from './components/Pages/coinPage';
import ComparePage from './components/Pages/comparePage';
import WatchListPage from './components/Pages/watchlistPage';
import Header from "./components/Common/Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
       <BrowserRouter>
       <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/dashbord' element={<DashbordPage isDarkMode={isDarkMode}/>}/>
        <Route path='/coin/:id' element={<CoinPage />}/>
        <Route path='/compare' element={<ComparePage isDarkMode={isDarkMode}/>}/>
        <Route path='/watchlist' element={<WatchListPage />}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
