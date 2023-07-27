import { AuthProvider } from '../context/Auth';
import { Dashboard } from '../pages/dashboard';
import { LandingPage } from '../pages/landingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Rotas = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default Rotas
