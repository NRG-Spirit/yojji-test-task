import { Routes, Route, Navigate } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="404" element={<ErrorPage />} />
      <Route path="*" element={<Navigate to="404" />} />
    </Routes>
  );
}

export default App;
