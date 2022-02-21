// @ts-check
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Heading, Box } from "@chakra-ui/react";
import Home from "./pages/Home";
import RandomPage from "./pages/RandomPage"
import Watchlist from './pages/Watchlist';

function App() {
  return (
    <div className="App">
      <Box p={10} color="white" className='header'>
        <div className='pages'>
        <Link className = 'Link'to="/" > Home </Link>
        <Link className = 'Link' to="/randompage">Random Page</Link>
        <Link className = 'Link' to="/watchlist">Watchlist</Link>
        </div>
        <Heading size="4xl" textAlign="center" className='headingTitle' >Boredom Buster</Heading>
        <div className='tagLine'> BUST YOUR BOREDOM LIKE A BAD HABIT</div>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/randompage" element={<RandomPage />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </div>
  );
}

export default App;
