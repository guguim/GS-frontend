import "./Navbar.scss"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
            <img className="logo" src={logo} alt="logo HC" />
                <p className="nav-logo-txt"> D´eiGuard</p>
            </div>
            <ul className="nav-list">
                <li>
                    <a className="nav-txt" href="#banner">
                        D´eiGuard
                    </a>
                </li>
                <li>
                    <a className="nav-txt" href="#projeto">
                        Projeto
                    </a>
                </li>
                <li>
                    <a className="nav-txt" href="#objetivo">
                        Objetivo
                    </a>
                </li>
                <li>
                    <a className="nav-txt" href="#contato">
                        Contato
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;