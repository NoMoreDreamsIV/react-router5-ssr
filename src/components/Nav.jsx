import { ConnectedLink } from "react-router5";

export default function Nav() {
    <nav>
        <ConnectedLink routeName="name">Home</ConnectedLink> 
        <ConnectedLink routeName="about">About</ConnectedLink> 
        <ConnectedLink routeName="info">Info</ConnectedLink> 
    </nav>
}