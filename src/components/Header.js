import logo from "../images/logo.svg";



export default function Header() {
    return (
        <header>
            <nav className = "nav">
                <img className = "nav-logo" src = {logo} alt = "" />
                <ul className = "nav-items">
                    <li><a href="">Pricing</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
 