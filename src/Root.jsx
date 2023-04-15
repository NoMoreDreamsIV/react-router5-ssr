import { renderToString } from 'react-dom/server'
import { RouterProvider } from 'react-router5';
import { router } from './router.mjs';
import App from './components/App.jsx';


export default function Root() {
    return (
        renderToString(<RouterProvider router={router} > 
            <App />
        </RouterProvider>)
    ) 
}