import logo from '../images/logo.svg';

function NavBar(){
    return (
        <nav>
            <img className= "img" src={logo} alt='logo'/>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    );
}

export default NavBar;