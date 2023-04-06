function Header(){
    return (
        <header>
            <nav className = "nav">
                <img className = "nav-logo" src = "./react-logo.png" />
                <ul className = "nav-items">
                    <li><a href="">Pricing</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}


function Page(){    
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

function MainContent(){
    return (
        <main>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Was well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

function Footer(){
    return (
        <footer><small>&copy; 2023 I am AyPraise</small></footer>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"));