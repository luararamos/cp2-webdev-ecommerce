import { Outlet } from 'react-router-dom';

export default function Carrinho() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Carrinho</h2>
      <Outlet />
    </div>
  );
}