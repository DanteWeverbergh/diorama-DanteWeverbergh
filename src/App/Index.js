import { Route, Routes, Navigate } from 'react-router';
import Start from './Start';
import App from './Diorama';

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Start />} />
        <Route path="/diorama/:name" element={<App />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}

export default Routing;
