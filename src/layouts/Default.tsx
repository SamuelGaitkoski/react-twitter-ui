import './Default.css';

import { Outlet } from 'react-router-dom';

import { Sidebar } from '../components/Sidebar';

// O conteúdo específico de cada página (children), vai aparecer no local que o componente Outlet do react-router-dom estiver.
// Sidebar está dentro do componente Default, dentro do nosso contexto de rotas.

export function Default() {
    return (
        <div className="layout">
            <Sidebar />

            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}