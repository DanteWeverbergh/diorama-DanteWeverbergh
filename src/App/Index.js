import { Route, Routes, Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import Start from './Start';
import App from './Diorama';
import Cadeau from './Cadeau';

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Start />} />
        <Route path="/diorama" element={<App />} />
        <Route path="/cadeau" element={<Cadeau />} />

        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}

export default Routing;
