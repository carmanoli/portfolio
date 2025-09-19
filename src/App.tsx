import { Routes, Route, Navigate } from 'react-router-dom'; 
import { AppShell } from "./components/layout/AppShell";

import { SoftwareProjectsPage } from './pages/SoftwareProjectsPage';
import { MakerProjectsPage } from './pages/MakerProjectsPage';
import { NetworkProjectsPage } from './pages/NetworkProjectsPage';

function App() {
  return (
    <AppShell>
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<Navigate to="/projects/software" replace />} />
        
        {/* Rota para a página de projetos de software */}
        <Route path="/projects/software" element={<SoftwareProjectsPage />} />

        {/* Rota para a página de projetos maker */}
        <Route path="/projects/maker" element={<MakerProjectsPage />} />

        <Route path="/projects/network" element={<NetworkProjectsPage />} />

        {/* Rota "Catch-all" para páginas não encontradas */}
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </AppShell>
  );
}

export default App;