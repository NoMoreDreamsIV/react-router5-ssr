import { useRoute } from "react-router5";
import Nav from './Nav.jsx';

function Main() {
    const {route} = useRoute();

    switch(route?.name) {
        case 'home':
            return <h1>Home</h1>;
        case 'about':
            return <h1>About</h1>;
        case 'info':
            return <h1>Info</h1>;
       
    }
}

export default function App() {
    return (
        <>
            <Nav />
            <main><Main /></main>
        </>
    )
}