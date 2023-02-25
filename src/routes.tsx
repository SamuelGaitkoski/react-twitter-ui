import { createBrowserRouter } from "react-router-dom";

import { Default } from "./layouts/Default";

import { Status } from "./pages/Status";
import { Timeline } from "./pages/Timeline";

// Nested Routes é uma forma de podermos reaproveitar partes de uma interface somente nas páginas que quisermos (página de login não tem o sidebar por exemplo, só a página timeline e status).
// children tem as rotas que vão ter o conteúdo da página default (sidebar).

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Default />,
        children: [
            {
                path: '/',
                element: <Timeline />
            },
            {
                path: '/status',
                element: <Status />
            }
        ]
    }
]);