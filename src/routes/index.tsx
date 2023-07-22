


import { LandingPage } from '../pages/landingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default Rotas
