import './App.css';
import FileExplorer from './file-explorer';
import LandingPage from './landing-page';
import Transactions from './transactions';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route index path='transaction-demo' element={<Transactions />} />
        <Route index path='file-explorer' element={<FileExplorer />} />
      </Routes>
    </Router>
  );
}
