import FileExplorer from './challenges/file-explorer';
import InfiniteScroll from './challenges/infinite-scroll';
import LandingPage from './components/landing-page';
import PasswordInput from './challenges/password-input';
import Transactions from './challenges/transactions';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/layouts/layout';
import AgeCalculator from './challenges/age-calculator';
import MindGame from './challenges/mind-game';
import RedoUndo from './challenges/redo-undo';
import Pagination from './challenges/pagination';
import Calendar from './challenges/calendar';
import Tabs from './challenges/tabs';
import TicTacToe from './challenges/tic-tac-toe';

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
          <Route path='age-calculator' element={<AgeCalculator />} />
          <Route path='mind-game' element={<MindGame />} />
          <Route path='redo-undo' element={<RedoUndo />} />
          <Route path='pagination' element={<Pagination />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='tabs' element={<Tabs />} />
          <Route path='tic-tac-toe' element={<TicTacToe />} />
        </Route>
      </Routes>
    </Router>
  );
}
