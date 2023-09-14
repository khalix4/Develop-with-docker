import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import MainContent from "./components/MainContent.jsx"
import './index.css'
import Footer from './components/Footer.jsx'
import MovieDetails from './components/MovieDetails.jsx';
import MovieContent from './components/MovieContent.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Header /> {/* Include the Header component */}
      <Routes>
        <Route path="/movies/:id" element={<MovieDetails />} />
        {/* You can add more routes here */}
      </Routes>
      <MainContent /> {/* Include the MainContent component */}
      <Footer /> {/* Include the Footer component */}
    </Router>
  );
};
export default App;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);







