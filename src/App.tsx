import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import TaskPage from './pages/TaskPage/TaskPage';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="task" element={<TaskPage />} />
        <Route path="404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="404" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
