import { ConnectedLink } from "react-router5";

export default function Nav() { // :)
    return <nav>   
        <ConnectedLink routeName="home">Home</ConnectedLink> 
        <ConnectedLink routeName="about">About</ConnectedLink> 
        <ConnectedLink routeName="info">Info</ConnectedLink> 
    </nav>
}