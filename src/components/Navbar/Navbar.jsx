import "./Navbar.scss"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <p className="nav-logo-txt">O C E A N</p>
            </div>
            <ul className="nav-list">
                <li>
                    <a className="nav-txt" href="#banner">
                        O C E A N
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