import { Routes, Route, Navigate } from 'react-router-dom'; 
import { AppShell } from "./components/layout/AppShell";

import { SoftwareProjectsPage } from './pages/SoftwareProjectsPage';
import { MakerProjectsPage } from './pages/MakerProjectsPage';
import { NetworkProjectsPage } from './pages/NetworkProjectsPage';
import { CybersecurityProjectsPage } from './pages/CybersecurityProjectsPage';

function App() {
  return (
    <AppShell>
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<Navigate to="/projects/software" replace />} />
        
        <Route path="/projects/software" element={<SoftwareProjectsPage />} />

        <Route path="/projects/maker" element={<MakerProjectsPage />} />

        <Route path="/projects/network" element={<NetworkProjectsPage />} />

        <Route path="/projects/cybersecurity" element={<CybersecurityProjectsPage />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </AppShell>
  );
}

export default App;