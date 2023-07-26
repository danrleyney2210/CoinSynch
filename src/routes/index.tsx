import { Dashboard } from '../pages/dashboard';
import { LandingPage } from '../pages/landingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default Rotas
