
import { RouterProvider } from 'react-router5';
import { router } from './router.mjs';
import App from './components/App.jsx';

if ('object' === typeof navigator) router.start();

// это клиентский компонент - тут должно быть не renderToString, а полноценный JSX !!!
export default function Root() {
    return (
        <RouterProvider router={router} > 
            <App />
        </RouterProvider>
    ) 
}