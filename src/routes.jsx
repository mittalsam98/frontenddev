import FileExplorer from './challanges/file-explorer';
import InfiniteScroll from './challanges/infinite-scroll';
import LandingPage from './components/landing-page';
import PasswordInput from './challanges/password-input';
import Transactions from './challanges/transactions';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/layouts/layout';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path='transaction-demo' element={<Transactions />} />
          <Route path='file-explorer' element={<FileExplorer />} />
          <Route path='infinite-scroll' element={<InfiniteScroll />} />
          <Route path='password-input' element={<PasswordInput />} />
        </Route>
      </Routes>
    </Router>
  );
}
