
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
// Placeholder imports for now, will create files next
import RecruitmentsPage from './pages/RecruitmentsPage';
import HousingPage from './pages/HousingPage';
import BillingPage from './pages/BillingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/recrutements" element={<RecruitmentsPage />} />
        <Route path="/logements" element={<HousingPage />} />
        <Route path="/facturation" element={<BillingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
