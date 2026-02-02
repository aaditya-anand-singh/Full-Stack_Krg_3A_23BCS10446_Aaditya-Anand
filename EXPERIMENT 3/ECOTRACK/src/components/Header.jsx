import {Link} from 'react-router-dom';

const Header=()=>{
    return(
        <header style={{ padding: "1rem", backgroundColor: "lightblue" }}>

            <h1>EcoTrack</h1>
            <nav>
            <Link to="/" style={{marginRight: "1rem", color: 'green'}}>dashboard</Link> 
            <Link to="/" style={{marginRight: "1rem", color: 'green'}}>Logs</Link> 

            <Link to="/" style={{marginRight: "1rem", color: 'green'}}>Login</Link> 
        </nav>
        </header>
    );
}
export default Header;